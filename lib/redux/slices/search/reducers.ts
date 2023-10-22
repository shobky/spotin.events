import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Option {
  name: string;
  checked: boolean;
}

export const initFilterOptions: Option[] = [
  { name: "All", checked: true },
  { name: "Workhshop", checked: false },
  { name: "languages", checked: false },
  { name: "courses", checked: false },
  { name: "clubs", checked: false },
  { name: "events", checked: false },
];

interface SearchState {
  searchQuery: string;
  filters: Option[];
}

const initialState: SearchState = {
  searchQuery: "",
  filters: initFilterOptions,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    search: (state, action: PayloadAction<{ q: string }>) => {
      state.searchQuery = action.payload.q;
    },
    toogleFiltercheck: (
      state,
      action: PayloadAction<{ filterIdx: number }>
    ) => {
      const i = action.payload.filterIdx;
      if (i === 0) {
        state.filters.forEach(filter => (filter.checked = false));
        state.filters[0].checked = true;
      } else {
        state.filters[0].checked = false;
        state.filters[i].checked = !state.filters[i].checked;

        if (
          state.filters.every(filter => filter.checked && filter.name !== "All")
        ) {
          state.filters.forEach(filter => (filter.checked = false));
          state.filters[0].checked = true;
        }
      }
    },
  },
});

export const { search } = searchSlice.actions;
