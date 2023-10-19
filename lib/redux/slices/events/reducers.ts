import { Event } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface EventsState {
  events: Event[];
  searchQuery: string;
}

const initialState: EventsState = {
  events: [],
  searchQuery: "",
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    populate: (state, action: PayloadAction<{ events: Event[] }>) => {
      state.events = action.payload.events;
    },
    search: (state, action: PayloadAction<{ q: string }>) => {
      state.searchQuery = action.payload.q;
    },
  },
});

export const { populate, search } = eventsSlice.actions;
