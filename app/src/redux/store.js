import { configureStore } from "@reduxjs/toolkit";
import listingReducer from "./listingSlice";
import tagReducer from "./tagSlice";

export const store = configureStore({
  reducer: {
    listing: listingReducer,
    tag: tagReducer,
  },
});
