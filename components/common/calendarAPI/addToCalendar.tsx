"use client";
import {
  CalendarBtnVariant,
  CalendarData,
  DetailsVariant,
  EventT,
} from "@/types";
import { CalendarCheck2, CalendarPlus, Loader2 } from "lucide-react";
import { Button } from "../../ui/button";
import { useState, useLayoutEffect } from "react";
import { addGoogleCalendarEvent } from "@/lib/calendar/addEvent";

type Props = {
  view?: DetailsVariant;
  event: EventT;
  variant: CalendarBtnVariant;
  calendarData?: CalendarData;
};

export default function AddToCalendar({
  view,
  event,
  variant,
  calendarData,
}: Props) {
  const [loading, setLoading] = useState(true);
  const text = `${event.checked ? "Added" : "Add"} to calendar`;
  const icon = loading ? (
    <Loader2 className=" animate-spin" />
  ) : event.checked ? (
    <CalendarCheck2 className="w-6 h-6" />
  ) : (
    <CalendarPlus className="w-6 h-6" />
  );

  useLayoutEffect(() => {
    setLoading(false);
  }, []);

  const handleClick = async () => {
    if (loading) return;
    console.log('click')
    try {
      setLoading(true);
      await addGoogleCalendarEvent(calendarData, event);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Button
      disabled={!calendarData || loading}
      onClick={handleClick}
      className={`
    ${
      variant === "default"
        ? "mt-4 w-full text-md flex rounded-2xl justify-center items-center gap-2"
        : "aspect-square rounded-full hover:bg-black/20"
    }
    `}
      size={variant}
      variant={event.checked || variant === "default" ? "default" : "ghost"}
    >
      <span
        className={`${variant === "default" && "scale-75"} ${
          view === "modal" || view === "page"
            ? "text-foreground"
            : "text-white hover:text-white "
        }`}
      >
        {icon}
      </span>
      {variant === "default" && text}
    </Button>
  );
}
