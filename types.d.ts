export type EventT = {
  id: string;
  type: string;
  name: string;
  date: Date | undefined;
  time?: number | undefined;
  facilitator: string;
  cover: string;
  location: string;
  article?: string;
};

export type ViewT = "modal" | "editor-view" | "page";
