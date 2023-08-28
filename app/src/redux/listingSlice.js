import { createSlice } from "@reduxjs/toolkit";
import { listingData } from "../data";
import { isSubArray } from "../helper/isSubArray";

const initialState = listingData.map((listing) => ({
  ...listing,
  tags: [listing.role, listing.level, ...listing.languages, ...listing.tools],
}));

export const listingSlice = createSlice({
  name: "listing",
  initialState,
  reducers: {
    filterListings: (state, { payload }) => {
      if (payload.length === 0) return initialState;
      return initialState.filter((listing) => {
        let a = [];
        const b = listing.tags;
        payload.forEach((element) => {
          a.push(element);
        });
        return isSubArray(a, b);
      });
    },
    resetJobs: () => initialState,
  },
});

export const { filterListings, resetJobs } = listingSlice.actions;

export default listingSlice.reducer;
