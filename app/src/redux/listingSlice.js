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
      state.filters = state.filters.filter(
        (filter) => filter !== action.payload
      );
    },
    removeAllFilter: (state) => {
      state.filters = [];
    },
    filterListings: (state, action) => {
      if (state.filters === null) {
        state.listings = listingData;
      } else {
        state.listings = state.listings.filter(
          (filter) =>
            action.payload === filter.role ||
            action.payload === filter.level ||
            filter.languages.some((language) => action.payload === language) ||
            filter.tools.some((tool) => action.payload === tool)
        );
      }
    },

    restoreListings: (state) => {
      state.listings = listingData;
    },
  },
});

export const {
  addFilter,
  removeFilter,
  removeAllFilter,
  filterListings,
  restoreListings,
} = listingSlice.actions;

export default listingSlice.reducer;
