// reducers/venueReducer.js
import { createSlice } from "@reduxjs/toolkit";
export const venueslice = createSlice({
  name: "venue",
  initialState: {
    venues: [],
  },
  reducers: {

    Addvenue: (state, action) => {
      state.venues = action.payload;
    },
    AddNewvenue: (state, action) => {
      state.venues = [...state.venues, action.payload];
    },
    updatevenues: (state, action) => {
      let data = action.payload;
      let index = state.venues.findIndex((obj) => obj.uid === data.uid)
      if (index !== -1) {
        state.venues[index] = data;
      }
    },
    deletevenue: (state, action) => {
      let id = action.payload;
      const updatedvenues = state.venues.filter(venue => venue.docId !== id)
      state.venues = updatedvenues;
    },

  },
});

export const selectvenues = (state) => state.venue.venues;

export const { Addvenue, updatevenues, deletevenue, AddNewvenue, } = venueslice.actions; // actions
export default venueslice.reducer;
