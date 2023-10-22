"use client"
import { useDispath } from "@/lib/redux";
import { eventActiveSlice } from "@/lib/redux/slices/eventActive/reducers";
import { EventT } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CalendarBtn from "./calendarBtn";
import EventMoreOptions from "../admins/eventMoreOptions";
import ADMINONLY from "../admins/adminOnly";

export default function Event({ event }: { event: EventT }) {
  const dispatch = useDispath();

  return (
    <div
      className={`group w-full  aspect-square relative rounded-3xl overflow-hidden`}
    >
      <div className="absolute right-0 top-0 z-[21] p-2 ">
        <CalendarBtn event={event} />
        <ADMINONLY>
          <EventMoreOptions event={event} />
        </ADMINONLY>
      </div>

      <p className="absolute top-1 left-0 text-sm  font-semibold text-white m-3 z-[31] ">
        27 DEC
      </p>
      <Image
        src={"/hero-card.jpeg"}
        // src={event.cover}
        alt={event.name}
        width={200}
        height={200}
        className="rounded-3xl w-full h-full aspect-square  object-cover absolute group-hover:scale-125 ease-in-out duration-500"
      />
      {/* <div className={`${event.cover} rounded-3xl h-full aspect-square  object-cover absolute group-hover:scale-125 ease-in-out duration-500`}></div> */}
      <Link
        href={`/event/${event?.id}`}
        onClick={() =>
          dispatch(eventActiveSlice.actions.selectModalEvent({ event }))
        }
        className="absolute bottom-0 z-20 p-3 h-full flex flex-col justify-end  bg-gradient-to-b from-gray-900/5 to-black/75 w-full"
      >
        <p
          style={{
            fontSize:
              "calc(18px + (24 - 16) * ((90vw - 320px) / (1920 - 320)))",
          }}
          className="font-medium  text-white"
        >
          {event.name}
        </p>
        <p
          style={{
            fontSize:
              "calc(10px + (24 - 16) * ((100vw - 320px) / (1920 - 320)))",
          }}
          className="text-white -mt-[.4rem]"
        >
          with {event.facilitator}
        </p>
      </Link>
    </div>
  );
}
