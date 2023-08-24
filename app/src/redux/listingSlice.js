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
    filterListings: (state) => {
      if (state.filters === []) {
        state.listings = listingData;
      } else {
        state.listings = state.listings.filter(
          (filter) =>
            state.filters.includes(filter.role) ||
            state.filters.includes(filter.level) ||
            filter.languages.some((language) =>
              state.filters.includes(language)
            ) ||
            filter.tools.some((tool) => state.filters.includes(tool))
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
