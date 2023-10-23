import { EventT, GoogleCalendarEvent } from "@/types";
import { gapi } from "gapi-script";

export const addGoogleCalendarEvent = (
  calendarID: string,
  event: GoogleCalendarEvent | EventT,
  accessToken: string
) => {
  function initiate() {
    gapi.client
      .request({
        path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
        method: "POST",
        body: event,
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(
        (response: any) => {
          console.log(response);
          return [true, response];
        },
        function (err: any) {
          console.log(err);
          return [false, err];
        }
      );
  }
  gapi.load("client", initiate);
};
