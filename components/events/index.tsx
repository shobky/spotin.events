"use client";
import { useDispath, useSelector } from "@/lib/redux";
import { eventsSlice } from "@/lib/redux/slices/events/reducers";
import { selectEvents, selectSearchQuery } from "@/lib/redux/slices/selectors";
import { EventT } from "@/types";
import React, { useEffect, useState } from "react";
import EventsSkeleton from "../loadingUI/eventsSkeleton";
import Event from "./event";

export default function Events({
  firstEventsPatch,
}: {
  firstEventsPatch: EventT[];
}) {
  const { searchQuery } = useSelector(selectSearchQuery);
  const { events } = useSelector(selectEvents);

  const dispatch = useDispath();

  useEffect(() => {
    dispatch(eventsSlice.actions.populate({ events: firstEventsPatch }));
  }, [firstEventsPatch]);

  return (
    <div className="flex flex-col w-full  gap-2">
      <h1 className="hidden sm:inline-flex text-[2.6rem] md:text-[3.2rem] -mt-[1.2rem] font-semibold">
        Never miss events with Spotin.
      </h1>
      <div className="min-h-[40vh] grid gap-2 lg:grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] w-full">
        {events && events?.length > 0 ? (
          events
            .filter(event => {
              if (
                event.name.toLowerCase().includes(searchQuery.toLowerCase())
              ) {
                return event;
              }
            })
            .map(event => <Event event={event} key={event.id} />)
        ) : (
          <EventsSkeleton />
        )}
        {/* {!fullyFetched && eventsList.length > 0 && (
      <button
        className="outline outline-foreground rounded-3xl outline-1 w-full aspect-square"
        onClick={handleStreamedFetch}
      >
        more
      </button>
    )} */}
      </div>
    </div>
  );
}
