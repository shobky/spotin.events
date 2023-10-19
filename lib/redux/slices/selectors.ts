import { State } from "..";

export const selectSearchQuery = (state: State) => state.search;
export const selectEvents = (state: State) => state.events;
