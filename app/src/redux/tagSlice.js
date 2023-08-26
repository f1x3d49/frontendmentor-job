import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const tagSlice = createSlice({
  name: "tag",
  initialState,
  reducers: {
    addTag: (state, action) => {
      if (!state.find((element) => element === action.payload)) {
        state.push(action.payload);
      }
    },
    removeTag: (state, action) => {
      state = state.filter((tag) => tag !== action.payload);
    },
  },
});

export const { addTag, removeTag } = tagSlice.actions;

export default tagSlice.reducer;
