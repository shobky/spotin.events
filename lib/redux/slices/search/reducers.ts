import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  LucideIcon,
  Filter,
  Languages,
  ClubIcon,
  Target,
  Calendar,
  Presentation,
} from "lucide-react";

export interface Option {
  name: string;
  checked: boolean;
  icon?: LucideIcon;
}

export const initFilterOptions: Option[] = [
  { name: "All", checked: true, icon: Filter },
  { name: "Workshop", checked: false, icon: Target },
  { name: "Languages", checked: false, icon: Languages },
  { name: "Courses", checked: false, icon: Presentation },
  { name: "Clubs", checked: false, icon: ClubIcon },
  { name: "Events", checked: false, icon: Calendar },
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
