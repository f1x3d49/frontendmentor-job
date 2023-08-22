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
  },
});

export const { addFilter } = listingSlice.actions;

export default listingSlice.reducer;
