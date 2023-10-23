import { Button } from "@/components/ui/button";
import React from "react";
import { CalendarCheck2, CalendarPlus } from "lucide-react";
import { CalendarData } from "@/types";
import { addGoogleCalendarEvent } from "@/lib/calendar/addEvent";
import { addHours } from "date-fns";

const event = {
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

export default function DetailsButton({
  checked,
  calendarData,
}: {
  checked: boolean;
  calendarData?: CalendarData;
}) {
  if (!calendarData) {
    return <p>no calendar data</p>;
  }
  const { calendarID, accessToken } = calendarData;

  return (
    <Button
      disabled={checked}
      onClick={() =>
        addGoogleCalendarEvent(
          calendarID || "shobkyy@gmail.com",
          event,
          accessToken
        )
      }
      className="mt-4 w-full text-md flex rounded-2xl justify-center items-center gap-4"
      size={"lg"}
      variant={"default"}
    >
      {checked ? (
        <>
          <CalendarCheck2 className=" scale-90" /> In Calendar
        </>
      ) : (
        <>
          <CalendarPlus className=" scale-90" /> Add to calendar
        </>
      )}
    </Button>
  );
}
