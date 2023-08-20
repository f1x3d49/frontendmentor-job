import { createSlice } from "@reduxjs/toolkit";
import { listingData } from "../data";

export const listingSlice = createSlice({
  name: "listing",
  initialState: listingData,
  reducers: {},
});

export default listingSlice.reducer;
