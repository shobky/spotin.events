"use client";
import { EventT } from "@/types";
import React from "react";
import Event from "./event";
import EventsSkeleton from "../loadingUI/eventsSkeleton";
import { useSelector } from "@/lib/redux";
import { selectSearchQuery } from "@/lib/redux/slices/selectors";

export default function RecommededEvents({
  active,
  events,
}: {
  active: string;
  events: EventT[];
}) {
  const { searchQuery } = useSelector(selectSearchQuery);
  const recommeded = events.filter(e => e.id !== active);
  return (
    <div className="grid gap-2 grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(12rem,1fr))]">
      {recommeded && recommeded?.length > 0 ? (
        recommeded
          ?.filter(event => {
            if (event.name.toLowerCase().includes(searchQuery.toLowerCase())) {
              return event;
            }
          })
          .map(event => (
            <div className=" w-full" key={event.id}>
              <Event event={event} />
            </div>
          ))
      ) : (
        <EventsSkeleton />
      )}
    </div>
  );
}
