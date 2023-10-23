"use client";
import React from "react";
import { EventT, DetailsVariant } from "@/types";
import CloseModal from "@/components/modal/close";
import DetailsCover from "./cover";
import DetailsDate from "./date";
import DetailsTypes from "./type";
import DetailsArticle from "./article";
import { useSelector } from "@/lib/redux";
import { selectEventActive } from "@/lib/redux/slices/selectors";
import AddToCalendar from "@/components/common/calendarAPI/addToCalendar";
import { Session } from "next-auth";

type Props = {
  view: DetailsVariant;
  eventFromPage?: EventT;
  calendarData?: {
    session: Session | null;
    accessToken: string | undefined;
  };
};

export default function EventDetails({
  view,
  eventFromPage,
  calendarData,
}: Props) {
  const { selectedModalEvent } = useSelector(selectEventActive);
  const event = eventFromPage || selectedModalEvent; //eventFromPage is from page/[id]
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
          <AddToCalendar
            view={view}
            event={event}
            variant="icon"
            calendarData={calendarData}
          />
        </div>
        <hr className=" opacity-15 border-stone-800 my-2 " />
        <DetailsTypes types={[event.type]} />
        <hr className=" opacity-15 border-stone-800 my-2" />
        {event.id && <DetailsArticle article={event.article} />}
        <AddToCalendar
          event={event}
          variant="default"
          calendarData={calendarData}
        />
      </section>
    </div>
  );
}
