"use client";
import React from "react";
import EventsSkeleton from "../loadingUI/eventsSkeleton";
import Event from "./event";
import { EventT } from "@/types";
import { selectEvents, selectSearchQuery } from "@/lib/redux/slices/selectors";
import { useSelector } from "@/lib/redux";
import Image from "next/image";

export default function EventList({
  recommendedEvents,
}: {
  recommendedEvents?: EventT[];
}) {
  const { searchQuery, filters } = useSelector(selectSearchQuery);
  const { events } = useSelector(selectEvents);

  const eventsToFilter = recommendedEvents ?? events;
  const filteredEvents = eventsToFilter.filter(event => {
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
    <div className="min-h-[40vh] grid gap-2 lg:grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] w-full">
      {eventsToFilter && eventsToFilter?.length > 0 ? (
        filteredEvents.length > 0 ? (
          filteredEvents.map(event => <Event event={event} key={event.id} />)
        ) : (
          <EmptyEventList />
        )
      ) : (
        <EventsSkeleton />
      )}
    </div>
  );
}

const EmptyEventList = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-[calc(100vw-2rem)] sm:w-[65vw] sm:h-[70vh] ">
      <p className="text-semibold text-lg opacity-75 text-foreground/90 ">
        That was all the events we have.
      </p>
      <Image
        src="/sadGirl.png"
        width={200}
        height={200}
        alt="sad little cartoon girl "
        className="w-[200px]"
        style={{ filter: "drop-shadow(5px 5px 25px var(--shadow))" }}
      />
    </div>
  );
};
