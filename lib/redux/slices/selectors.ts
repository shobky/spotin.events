import { State } from "..";

export const selectEvents = (state: State) => state.events;
export const selectSearchQuery = (state: State) => state.search;
export const selectEventActive = (state: State) => state.eventActive
