"use client";
import { useDispath } from "@/lib/redux";
import { eventsSlice } from "@/lib/redux/slices/events/reducers";
import { EventT } from "@/types";
import React, { useLayoutEffect } from "react";
import EventList from "./eventList";

export default function Events({
  firstEventsPatch,
}: {
  firstEventsPatch: EventT[];
}) {
  const dispatch = useDispath();

  // useLayoutEffect(() => {
  //   dispatch(eventsSlice.actions.populate({ events: firstEventsPatch }));
  // }, [firstEventsPatch]);

  return (
    <div className="flex flex-col w-full gap-2 mt-1 pb-4">
      {/* <h1 className="hidden sm:inline-flex text-[2.6rem] md:text-[3.2rem] -mt-[1.2rem] font-semibold">
        Never Miss Events With Spotin.
      </h1> */}
      <EventList />
    </div>
  );
}
