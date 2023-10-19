import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  searchQuery: string;
}

const initialState: SearchState = {
  searchQuery: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    search: (state, action: PayloadAction<{ q: string }>) => {
      state.searchQuery = action.payload.q;
    },
  },
});

export const { search } = searchSlice.actions;

