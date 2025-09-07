import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { FounderEvent, EventType } from '../../types';

interface EventsState {
  events: FounderEvent[];
  filteredEvents: FounderEvent[];
  searchQuery: string;
  typeFilter: EventType | 'all';
  isLoading: boolean;
  error: string | null;
}

const initialState: EventsState = {
  events: [],
  filteredEvents: [],
  searchQuery: '',
  typeFilter: 'all',
  isLoading: false,
  error: null,
};

// Async thunks
export const fetchEvents = createAsyncThunk(
  'events/fetchEvents',
  async (_, { rejectWithValue }) => {
    try {
      // Mock API call - return empty array
      await new Promise(resolve => setTimeout(resolve, 700));
      return [];
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to fetch events');
    }
  }
);

export const registerForEvent = createAsyncThunk(
  'events/registerForEvent',
  async (eventId: string, { rejectWithValue }) => {
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 500));
      return eventId;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to register for event');
    }
  }
);

export const unregisterFromEvent = createAsyncThunk(
  'events/unregisterFromEvent',
  async (eventId: string, { rejectWithValue }) => {
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 400));
      return eventId;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to unregister from event');
    }
  }
);

export const createEvent = createAsyncThunk(
  'events/createEvent',
  async (eventData: Omit<FounderEvent, 'id' | 'createdAt' | 'attendees' | 'organizerId'>, { rejectWithValue }) => {
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 800));
      return { id: Date.now().toString(), ...eventData, createdAt: new Date(), attendees: [], organizerId: '1' };
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to create event');
    }
  }
);

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      // Filter events based on search query
      state.filteredEvents = state.events.filter(event =>
        event.title.toLowerCase().includes(action.payload.toLowerCase()) ||
        event.description.toLowerCase().includes(action.payload.toLowerCase()) ||
        event.location.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    setTypeFilter: (state, action: PayloadAction<EventType | 'all'>) => {
      state.typeFilter = action.payload;
      // Filter events based on type
      if (action.payload === 'all') {
        state.filteredEvents = state.events;
      } else {
        state.filteredEvents = state.events.filter(event => event.type === action.payload);
      }
    },
    clearError: (state) => {
      state.error = null;
    },
    addEvent: (state, action: PayloadAction<FounderEvent>) => {
      state.events.unshift(action.payload);
      state.filteredEvents.unshift(action.payload);
    },
    updateEvent: (state, action: PayloadAction<FounderEvent>) => {
      const index = state.events.findIndex(event => event.id === action.payload.id);
      if (index !== -1) {
        state.events[index] = action.payload;
      }
      
      const filteredIndex = state.filteredEvents.findIndex(event => event.id === action.payload.id);
      if (filteredIndex !== -1) {
        state.filteredEvents[filteredIndex] = action.payload;
      }
    },
    removeEvent: (state, action: PayloadAction<string>) => {
      state.events = state.events.filter(event => event.id !== action.payload);
      state.filteredEvents = state.filteredEvents.filter(event => event.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch events
      .addCase(fetchEvents.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.events = action.payload;
        state.filteredEvents = action.payload;
        state.error = null;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Register for event
      .addCase(registerForEvent.fulfilled, (state, action) => {
        const event = state.events.find(e => e.id === action.payload);
        if (event) {
          event.attendees.push('current-user-id'); // Replace with actual user ID
        }
        
        const filteredEvent = state.filteredEvents.find(e => e.id === action.payload);
        if (filteredEvent) {
          filteredEvent.attendees.push('current-user-id');
        }
      })
      .addCase(registerForEvent.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      // Unregister from event
      .addCase(unregisterFromEvent.fulfilled, (state, action) => {
        const event = state.events.find(e => e.id === action.payload);
        if (event) {
          event.attendees = event.attendees.filter(id => id !== 'current-user-id');
        }
        
        const filteredEvent = state.filteredEvents.find(e => e.id === action.payload);
        if (filteredEvent) {
          filteredEvent.attendees = filteredEvent.attendees.filter(id => id !== 'current-user-id');
        }
      })
      .addCase(unregisterFromEvent.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      // Create event
      .addCase(createEvent.fulfilled, (state, action) => {
        state.events.unshift(action.payload);
        state.filteredEvents.unshift(action.payload);
      })
      .addCase(createEvent.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const { 
  setSearchQuery, 
  setTypeFilter, 
  clearError, 
  addEvent, 
  updateEvent, 
  removeEvent 
} = eventsSlice.actions;

export default eventsSlice.reducer;
