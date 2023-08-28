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
    removeTag: (state, { payload }) => {
      state = state.filter((filter) => filter !== payload);
      return state;
    },
    removeAllTag: (state) => {
      state = [];
      return state;
    },
  },
});

export const { addTag, removeTag, removeAllTag } = tagSlice.actions;

export default tagSlice.reducer;
