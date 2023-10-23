"use client";
import React from "react";
import { CalendarData, EventT, ViewT } from "@/types";
import CloseModal from "@/components/modal/close";
import DetailsCover from "./cover";
import CalendarBtn from "../calendarBtn";
import DetailsDate from "./date";
import DetailsTypes from "./type";
import DetailsArticle from "./article";
import DetailsButton from "./button";
import { useSelector } from "@/lib/redux";
import { selectEventActive } from "@/lib/redux/slices/selectors";
type Props = {
  view: ViewT;
  calendarData?: CalendarData;
  eventFromPage?: EventT;
};

export default function EventDetails({
  view,
  calendarData,
  eventFromPage,
}: Props) {
  const { selectedModalEvent } = useSelector(selectEventActive);
  const event = selectedModalEvent || eventFromPage;
  if (!event) {
    return <>something went wrong, REFRESH.</>;
  }
  return (
    <div
      className={`flex rounded-[30px] overflow-hidden flex-col sm:flex-row h-full w-full text-foreground bg-stone-200 relative 
      ${view !== "modal" && "border border-input"}`}
    >
      <CloseModal view={view} />
      <DetailsCover id={event.id} />

      <section className="bg-background relative m-auto p-4 w-full h-full sm:w-1/2 flex flex-col gap-2 aspect-square overflow-y-auto event-details-scrollable">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-semibold ">{event?.name}</h1>
            <h3 className=" text-sm text-secondary-foreground">
              With {event?.facilitator}
            </h3>
            <DetailsDate date={event.date} />
          </div>
          <CalendarBtn view={view} event={event} />
        </div>
        <hr className=" opacity-15 border-stone-800 my-2 " />
        <DetailsTypes types={[event.type]} />
        <hr className=" opacity-15 border-stone-800 my-2" />
        {event.id && <DetailsArticle article={event.article} />}

        <DetailsButton calendarData={calendarData} checked={event.checked} />
      </section>
    </div>
  );
}
