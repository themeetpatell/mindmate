import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { DiscoveryProfile, SearchFilters, SearchQuery } from '../../types';

interface DiscoveryState {
  profiles: DiscoveryProfile[];
  filteredProfiles: DiscoveryProfile[];
  searchQuery: string;
  filters: SearchFilters;
  isLoading: boolean;
  error: string | null;
  hasMore: boolean;
  currentPage: number;
}

const initialState: DiscoveryState = {
  profiles: [],
  filteredProfiles: [],
  searchQuery: '',
  filters: {},
  isLoading: false,
  error: null,
  hasMore: true,
  currentPage: 1,
};

// Async thunks
export const fetchDiscoveryProfiles = createAsyncThunk(
  'discovery/fetchProfiles',
  async (_query: SearchQuery, { rejectWithValue }) => {
    try {
      // Mock API call - return empty array
      await new Promise(resolve => setTimeout(resolve, 800));
      return [];
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to fetch profiles');
    }
  }
);

export const connectWithFounder = createAsyncThunk(
  'discovery/connectWithFounder',
  async (founderId: string, { rejectWithValue }) => {
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 500));
      return founderId;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to connect');
    }
  }
);

export const requestIntroduction = createAsyncThunk(
  'discovery/requestIntroduction',
  async (data: { founderId: string; message: string }, { rejectWithValue }) => {
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 600));
      return data;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to request introduction');
    }
  }
);

const discoverySlice = createSlice({
  name: 'discovery',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      // Filter profiles based on search query
      state.filteredProfiles = state.profiles.filter(profile =>
        profile.founder.company.toLowerCase().includes(action.payload.toLowerCase()) ||
        profile.founder.bio.toLowerCase().includes(action.payload.toLowerCase()) ||
        profile.founder.skills.some(skill => 
          skill.name.toLowerCase().includes(action.payload.toLowerCase())
        )
      );
    },
    setFilters: (state, action: PayloadAction<SearchFilters>) => {
      state.filters = action.payload;
      // Apply filters to profiles
      state.filteredProfiles = state.profiles.filter(profile => {
        const matchesIndustry = !action.payload.industries?.length || 
          action.payload.industries.includes(profile.founder.industry);
        const matchesStage = !action.payload.stages?.length || 
          action.payload.stages.includes(profile.founder.companyStage);
        const matchesLocation = !action.payload.locations?.length || 
          action.payload.locations.some(loc => 
            profile.founder.location.toLowerCase().includes(loc.toLowerCase())
          );
        const matchesCompatibility = !action.payload.minCompatibilityScore || 
          profile.compatibilityScore >= action.payload.minCompatibilityScore;
        
        return matchesIndustry && matchesStage && matchesLocation && matchesCompatibility;
      });
    },
    clearFilters: (state) => {
      state.filters = {};
      state.searchQuery = '';
      state.filteredProfiles = state.profiles;
    },
    clearError: (state) => {
      state.error = null;
    },
    resetDiscovery: (state) => {
      state.profiles = [];
      state.filteredProfiles = [];
      state.searchQuery = '';
      state.filters = {};
      state.isLoading = false;
      state.error = null;
      state.hasMore = true;
      state.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch profiles
      .addCase(fetchDiscoveryProfiles.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchDiscoveryProfiles.fulfilled, (state, action) => {
        state.isLoading = false;
        // Mock implementation - just set empty arrays
        state.profiles = action.payload;
        state.filteredProfiles = action.payload;
        state.hasMore = false;
        state.currentPage = 1;
      })
      .addCase(fetchDiscoveryProfiles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Connect with founder
      .addCase(connectWithFounder.fulfilled, (state, action) => {
        // Remove the connected founder from discovery
        state.profiles = state.profiles.filter(profile => profile.founder.id !== action.payload);
        state.filteredProfiles = state.filteredProfiles.filter(profile => profile.founder.id !== action.payload);
      })
      .addCase(connectWithFounder.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      // Request introduction
      .addCase(requestIntroduction.fulfilled, (_state) => {
        // Introduction request sent successfully
      })
      .addCase(requestIntroduction.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const { 
  setSearchQuery, 
  setFilters, 
  clearFilters, 
  clearError, 
  resetDiscovery 
} = discoverySlice.actions;

export default discoverySlice.reducer;
