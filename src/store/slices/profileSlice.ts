import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { FounderProfile, CreateFounderProfileData, UpdateFounderProfileData } from '../../types';

interface ProfileState {
  profile: FounderProfile | null;
  isLoading: boolean;
  error: string | null;
  isEditing: boolean;
}

const initialState: ProfileState = {
  profile: null,
  isLoading: false,
  error: null,
  isEditing: false,
};

// Async thunks
export const fetchProfile = createAsyncThunk(
  'profile/fetchProfile',
  async (_, { rejectWithValue }) => {
    try {
      // Mock API call - return null to use mock data
      await new Promise(resolve => setTimeout(resolve, 600));
      return null;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to fetch profile');
    }
  }
);

export const createProfile = createAsyncThunk(
  'profile/createProfile',
  async (profileData: CreateFounderProfileData, { rejectWithValue }) => {
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 800));
      return profileData;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to create profile');
    }
  }
);

export const updateProfile = createAsyncThunk(
  'profile/updateProfile',
  async (profileData: UpdateFounderProfileData, { rejectWithValue }) => {
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 800));
      return profileData;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to update profile');
    }
  }
);

export const uploadProfileImage = createAsyncThunk(
  'profile/uploadImage',
  async (file: File, { rejectWithValue }) => {
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      return URL.createObjectURL(file);
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to upload image');
    }
  }
);

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setEditing: (state, action: PayloadAction<boolean>) => {
      state.isEditing = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    updateProfileField: (state, action: PayloadAction<{ field: keyof FounderProfile; value: any }>) => {
      if (state.profile) {
        (state.profile as any)[action.payload.field] = action.payload.value;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch profile
      .addCase(fetchProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profile = action.payload;
        state.error = null;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Create profile
      .addCase(createProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profile = action.payload as any;
        state.isEditing = false;
        state.error = null;
      })
      .addCase(createProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Update profile
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profile = action.payload as any;
        state.isEditing = false;
        state.error = null;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Upload image
      .addCase(uploadProfileImage.fulfilled, (state, action) => {
        if (state.profile) {
          (state.profile as any).profileImage = action.payload;
        }
      })
      .addCase(uploadProfileImage.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const { setEditing, clearError, updateProfileField } = profileSlice.actions;
export default profileSlice.reducer;
