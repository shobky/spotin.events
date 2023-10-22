import { EventT } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { object } from "zod";

interface EventActiveState {
  selectedModalEvent: EventT | undefined;
  selectedEditEvent: EventT | undefined;
  newEvent: EventT;
}
const initialState: EventActiveState = {
  selectedModalEvent: undefined,
  selectedEditEvent: undefined,
  newEvent: {
    id: "",
    type: "",
    name: "",
    date: new Date(),
    facilitator: "",
    cover: "",
    location: "",
    article: "",
    checked: false,
  },
};

export const eventActiveSlice = createSlice({
  name: "eventActive",
  initialState,
  reducers: {
    selectModalEvent: (state, action: PayloadAction<{ event: EventT }>) => {
      state.selectedModalEvent = action.payload.event;
    },
    selectEditEvent: (state, action: PayloadAction<{ event: EventT }>) => {
      state.selectedEditEvent = action.payload.event;
    },
    editEvent: (
      state,
      action: PayloadAction<{ field: string; value: any }>
    ) => {
      console.log({
        field: action.payload.field,
        value: action.payload.value,
      });
      state.newEvent = {
        ...state.newEvent,
        [action.payload.field]: action.payload.value,
      };
    },
    setInitalStateForEditEvent: (
      state,
      action: PayloadAction<{ event: EventT }>
    ) => {
      state.newEvent = action.payload.event;
    },
  },
});

export const { selectModalEvent, selectEditEvent } = eventActiveSlice.actions;
