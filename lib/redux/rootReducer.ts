import { eventsSlice } from "./slices/events/reducers";
import { modalSlice } from "./slices/modal/reducers";
import { searchSlice } from "./slices/search/reducers";

export const reducer = {
  events: eventsSlice.reducer,
  search: searchSlice.reducer,
  modal: modalSlice.reducer,
};
