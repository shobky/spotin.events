import { eventsSlice } from "./slices/events/reducers";
import { eventActiveSlice } from "./slices/eventActive/reducers";
import { searchSlice } from "./slices/search/reducers";

export const reducer = {
  events: eventsSlice.reducer,
  search: searchSlice.reducer,
  eventActive: eventActiveSlice.reducer,
};
