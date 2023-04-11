import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: "React",
  },
  reducers: {
    SEARCH: (state, action) => {
      state.search = action.payload;
    },
  },
});
