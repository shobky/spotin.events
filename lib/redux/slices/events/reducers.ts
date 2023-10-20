import { EventT } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface EventsState {
  events: EventT[];
}

const initialState: EventsState = {
  events: [],
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    populate: (state, action: PayloadAction<{ events: EventT[] }>) => {
      state.events = action.payload.events;
    },
  },
});

export const { populate } = eventsSlice.actions;
