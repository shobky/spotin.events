"use client";
import { CalendarData, EventT } from "@/types";
import { addHours } from "date-fns";
import { gapi } from "gapi-script";

const eventlocal = {
  summary: "Google I/O 2015",
  location: "800 Howard St., San Francisco, CA 94103",
  description: "A chance to hear more about Google's developer products.",
  start: {
    dateTime: new Date(),
    timeZone: "America/Los_Angeles",
  },
  end: {
    dateTime: addHours(new Date(), 1),
    timeZone: "America/Los_Angeles",
  },
  recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
  attendees: [{ email: "lpage@example.com" }, { email: "sbrin@example.com" }],
  reminders: {
    useDefault: false,
    overrides: [
      { method: "email", minutes: 24 * 60 },
      { method: "popup", minutes: 10 },
    ],
  },
};


export const addGoogleCalendarEvent = async (
  calendarDate: CalendarData,
  event: EventT
) => {
  async function initiate() {
    try {
      const res = await gapi.client.request({
        path: `https://www.googleapis.com/calendar/v3/calendars/${calendarDate?.session?.user?.email}/events`,
        method: "POST",
        body: eventlocal,
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${calendarDate?.accessToken}`,
        },
      });
      return res;
    } catch (err) {
      return err;
    }
  }
  gapi.load("client", initiate);
};

