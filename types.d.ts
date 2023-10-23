import { Session } from "next-auth";

export type EventT = {
  id: string;
  type: string;
  name: string;
  date: day;
  facilitator: string;
  cover: string;
  location: string;
  article: string;
  checked: boolean;
};

export type DetailsVariant = "modal" | "editor-view" | "page" | "event";
export type CalendarBtnVariant = "icon" | "default";
export type ViewT = "modal" | "editor-view" | "page"; 

export type CalendarData =
  | {
      session: Session | null;
      accessToken: string | undefined;
    }
  | undefined;
