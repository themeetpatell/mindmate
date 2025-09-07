import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Match, MatchStatus } from '../../types';

interface ConnectionsState {
  connections: Match[];
  filteredConnections: Match[];
  searchQuery: string;
  statusFilter: MatchStatus | 'all';
  isLoading: boolean;
  error: string | null;
}

const initialState: ConnectionsState = {
  connections: [],
  filteredConnections: [],
  searchQuery: '',
  statusFilter: 'all',
  isLoading: false,
  error: null,
};

// Async thunks
export const fetchConnections = createAsyncThunk(
  'connections/fetchConnections',
  async (_, { rejectWithValue }) => {
    try {
      // Mock API call - return empty array
      await new Promise(resolve => setTimeout(resolve, 500));
      return [];
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to fetch connections');
    }
  }
);

export const updateConnectionStatus = createAsyncThunk(
  'connections/updateStatus',
  async (data: { connectionId: string; status: MatchStatus }, { rejectWithValue }) => {
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 400));
      return data;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to update connection');
    }
  }
);

export const sendMessage = createAsyncThunk(
  'connections/sendMessage',
  async (data: { connectionId: string; message: string }, { rejectWithValue }) => {
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 300));
      return data;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to send message');
    }
  }
);

const connectionsSlice = createSlice({
  name: 'connections',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      // Filter connections based on search query
      state.filteredConnections = state.connections.filter(connection =>
        connection.sharedInterests.some(interest => 
          interest.toLowerCase().includes(action.payload.toLowerCase())
        ) ||
        connection.mutualConnections.some(connection => 
          connection.toLowerCase().includes(action.payload.toLowerCase())
        )
      );
    },
    setStatusFilter: (state, action: PayloadAction<MatchStatus | 'all'>) => {
      state.statusFilter = action.payload;
      // Filter connections based on status
      if (action.payload === 'all') {
        state.filteredConnections = state.connections;
      } else {
        state.filteredConnections = state.connections.filter(connection => 
          connection.status === action.payload
        );
      }
    },
    clearError: (state) => {
      state.error = null;
    },
    addConnection: (state, action: PayloadAction<Match>) => {
      state.connections.unshift(action.payload);
      state.filteredConnections.unshift(action.payload);
    },
    removeConnection: (state, action: PayloadAction<string>) => {
      state.connections = state.connections.filter(connection => connection.id !== action.payload);
      state.filteredConnections = state.filteredConnections.filter(connection => connection.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch connections
      .addCase(fetchConnections.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchConnections.fulfilled, (state, action) => {
        state.isLoading = false;
        state.connections = action.payload;
        state.filteredConnections = action.payload;
        state.error = null;
      })
      .addCase(fetchConnections.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Update connection status
      .addCase(updateConnectionStatus.fulfilled, (state, action) => {
        const { connectionId, status } = action.payload;
        const connection = state.connections.find(conn => conn.id === connectionId);
        if (connection) {
          connection.status = status;
          connection.updatedAt = new Date();
        }
        
        // Update filtered connections as well
        const filteredConnection = state.filteredConnections.find(conn => conn.id === connectionId);
        if (filteredConnection) {
          filteredConnection.status = status;
          filteredConnection.updatedAt = new Date();
        }
      })
      .addCase(updateConnectionStatus.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      // Send message
      .addCase(sendMessage.fulfilled, (_state, _action) => {
        // Message sent successfully - could update last message timestamp
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const { 
  setSearchQuery, 
  setStatusFilter, 
  clearError, 
  addConnection, 
  removeConnection 
} = connectionsSlice.actions;

export default connectionsSlice.reducer;
