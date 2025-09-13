import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [],
  myEvents: [],
  isLoading: false,
  error: null,
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, action) => {
      state.events = action.payload;
    },
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },
    updateEvent: (state, action) => {
      const index = state.events.findIndex(event => event.id === action.payload.id);
      if (index !== -1) {
        state.events[index] = action.payload;
      }
    },
    removeEvent: (state, action) => {
      state.events = state.events.filter(event => event.id !== action.payload);
    },
    setMyEvents: (state, action) => {
      state.myEvents = action.payload;
    },
    addMyEvent: (state, action) => {
      state.myEvents.push(action.payload);
    },
    removeMyEvent: (state, action) => {
      state.myEvents = state.myEvents.filter(event => event.id !== action.payload);
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { 
  setEvents, 
  addEvent, 
  updateEvent, 
  removeEvent,
  setMyEvents,
  addMyEvent,
  removeMyEvent,
  setLoading, 
  setError 
} = eventsSlice.actions;
export default eventsSlice.reducer;
