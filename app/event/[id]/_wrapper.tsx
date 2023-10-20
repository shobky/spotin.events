"use client";
import EventDetails from "@/components/events/details";
import DetailsSkeleton from "@/components/loadingUI/detailsSkeleton";
import { useSelector } from "@/lib/redux";
import { selectEvents } from "@/lib/redux/slices/selectors";
import { EventT } from "@/types";
import React from "react";

export default function Wrapper({ id }: { id: string }) {
  const { events } = useSelector(selectEvents);
  console.log(events)
  const event: EventT[] = events?.filter(item => item.id === id);
  return (
    <>{event[0] ? <EventDetails view="page" event={event[0]} /> : <DetailsSkeleton />}</>
  );
}
