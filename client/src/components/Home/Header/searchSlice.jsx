import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: "React",
    loading: false,
  },
  reducers: {
    SEARCH: (state, action) => {
      state.search = action.payload;
      state.loading = true;
    },
    UPDATE: (state, action) => {
      state.loading = false;
    },
  },
});

export const { UPDATE } = searchSlice.actions;
