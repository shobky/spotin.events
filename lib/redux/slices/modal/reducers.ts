import { EventT } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  selectedModalEvent: EventT | undefined;
}

const initialState: ModalState = {
  selectedModalEvent: undefined,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    selectModalEvent: (state, action: PayloadAction<{ event: EventT }>) => {
      state.selectedModalEvent = action.payload.event;
    },
  },
});

export const { selectModalEvent } = modalSlice.actions;
