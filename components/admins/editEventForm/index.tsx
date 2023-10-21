"use client";
import React, { useEffect, useState } from "react";
import EventEditForm from "@/components/admins/editEventForm/form";
import EventDetails from "@/components/events/details";
import Event from "@/components/events/event";
import { useDispath, useSelector } from "@/lib/redux";
import { selectEventActive } from "@/lib/redux/slices/selectors";
import { eventActiveSlice } from "@/lib/redux/slices/eventActive/reducers";
type EventT = {
  id: string;
  type: string;
  name: string;
  date: Date;
  time: number;
  facilitator: string;
  cover: string;
  location: string;
  article: string;
  checked: boolean;
};

const initialEvent = {
  id: "",
  type: "",
  name: "",
  date: new Date(),
  time: 0,
  facilitator: "",
  cover: "",
  location: "",
  article: "",
  checked: false,
};

export default function Editor({ event }: { event?: EventT }) {
  const { newEvent } = useSelector(selectEventActive);
  const dispatch = useDispath();

  useEffect(() => {
    if (event) {
      dispatch(eventActiveSlice.actions.setInitalStateForEditEvent({ event }));
    }
  }, [event]);

  return (
    <div className="flex  items-center justify-evenly">
      <div className="w-[50%] grid gap-2">
        <div className="w-[35%]">
          <Event event={newEvent} />
        </div>
        <EventDetails event={newEvent} view="editor-view" />
      </div>
      <EventEditForm />
    </div>
  );
}
