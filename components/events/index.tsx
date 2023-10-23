"use client";
import { useDispath } from "@/lib/redux";
import { eventsSlice } from "@/lib/redux/slices/events/reducers";
import { CalendarData, EventT } from "@/types";
import React, { useLayoutEffect } from "react";
import EventsSkeleton from "../loadingUI/eventsSkeleton";
import Event from "./event";
import { selectEvents, selectSearchQuery } from "@/lib/redux/slices/selectors";
import { useSelector } from "@/lib/redux";
import { EmptyEventList } from "./noEvents";

export default function Events({
  data,
  calendarData,
}: {
  data: EventT[];
  calendarData?: CalendarData;
}) {
  const dispatch = useDispath();
  useLayoutEffect(() => {
    dispatch(
      eventsSlice.actions.populate({
        events: data,
      })
    );
  }, [data]);

  const { searchQuery, filters } = useSelector(selectSearchQuery);
  const { events } = useSelector(selectEvents);

  const filteredEvents = events?.filter(event => {
    if (filters[0].checked && searchQuery.length < 1) {
      return true;
    } else {
      if (
        filters.some(
          f =>
            f.checked === true &&
            f.name.toLocaleLowerCase() === event.type.toLocaleLowerCase() &&
            event.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      ) {
        return event;
      } else if (
        event.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        filters[0].checked
      ) {
        return event;
      }
    }
  });

  return (
    <div className="w-full">
      <div className="min-h-[40vh] grid gap-2 lg:grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] w-full">
        {events && events?.length > 0 ? (
          filteredEvents.length > 0 ? (
            filteredEvents.map(event => <Event calendarData={calendarData} event={event} key={event.id} />)
          ) : (
            <EmptyEventList />
          )
        ) : (
          <EventsSkeleton />
        )}
      </div>
    </div>
  );
}
