"use client";
import EventDetails from "@/components/events/details";
import Event from "@/components/events/event";
import { useDispath, useSelector } from "@/lib/redux";
import { eventActiveSlice } from "@/lib/redux/slices/eventActive/reducers";
import { selectEventActive } from "@/lib/redux/slices/selectors";
import { EventT } from "@/types";
import React, { useEffect } from "react";
import EditorForm from "./form";

export default function Index({ event }: { event?: EventT }) {
  const { newEvent } = useSelector(selectEventActive);
  const dispatch = useDispath();
  useEffect(() => {
    if (event) {
      dispatch(eventActiveSlice.actions.setInitalStateForEditEvent({ event }));
    }
  }, [event]);
  return (
    <main className="flex flex-col-reverse gap-6 md:flex-row justify-evenly items-center">
      <div className="flex flex-col w-full sm:w-1/2 gap-4">
        <div className=" w-[50%] sm:w-[35%]">
          <Event event={newEvent} />
        </div>
        <EventDetails view="editor-view" event={newEvent} />
      </div>
      <EditorForm />
    </main>
  );
}
