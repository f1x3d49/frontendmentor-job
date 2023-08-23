import { createSlice } from "@reduxjs/toolkit";
import { listingData } from "../data";

export const listingSlice = createSlice({
  name: "listing",
  initialState: {
    listings: listingData,
    filters: [],
  },
  reducers: {
    addFilter: (state, action) => {
      if (!state.filters.find((element) => element === action.payload)) {
        state.filters.push(action.payload);
      }
    },
    removeFilter: (state, action) => {
      state.filters.filter((filter) => filter !== action.payload);
    },
  },
});

export const { addFilter, removeFilter } = listingSlice.actions;

export default listingSlice.reducer;
