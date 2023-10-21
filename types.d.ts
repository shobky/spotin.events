import { initialEvent } from "./lib/redux/slices/eventActive/reducers";
export type EventT = {
  id: string;
  type: string;
  name: string;
  date: day;
  time: number;
  facilitator: string;
  cover: string;
  location: string;
  article: string;
  checked: boolean;
};

const initialEvent = {
  id: "",
  type: "",
  name: "",
  date: new Date(),
  time: 0,
  facilitator: "",
  cover: "",
  location: "",
  article: "",
  checked: false,
};
export type EventKey =
  | "id"
  | "name"
  | "cover"
  | "facilitator"
  | "location"
  | "date"
  | "type";

export type ViewT = "modal" | "editor-view" | "page";
