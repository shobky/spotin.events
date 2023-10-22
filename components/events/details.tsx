import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { EventT, ViewT } from "@/types";
import CloseModal from "../modal/close";
import { format, lightFormat, parseISO } from "date-fns";
import CalendarBtn from "./calendarBtn";

type Props = {
  event: EventT;
  view: ViewT;
};

export default function EventDetails({ event, view }: Props) {
  if (!event) {
    return <>something went wrong, REFRESH.</>;
  }
  return (
    <div
      className={` flex flex-col sm:flex-row flex-shrink-0  h-[100%] bg-stone-200 relative rounded-3xl
       ${
         view !== "modal" && ` border  rounded-3xl border-input`
       }  w-full relative text-foreground `}
    >
      <CloseModal view={view} />
      <Image
        src={event.cover}
        alt=""
        width={400} 
        height={800}
        className="rounded-3xl sm:rounded-r-none aspect-square sm:h-full  h-1/2 w-full sm:w-1/2 object-cover relative z-10 "
      />
      <div className="absolute z-0 rounded-3xl sm:rounded-r-none aspect-square sm:h-full h-1/2 w-full sm:w-1/2 animate-pulse dark:bg-stone-500"></div>

      <section
        className={` bg-background rounded-3xl  sm:rounded-l-none p-4 w-full  sm:w-1/2 grid gap-2 aspect-square overflow-auto`}
      >
        <div className=" event-details flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-semibold ">{event?.name}</h1>
            <h3 className="font-light text-sm">with {event?.facilitator}</h3>
          </div>
          <CalendarBtn view={view} event={event} />
        </div>
        <hr className=" opacity-15 border-stone-800 " />
        <h2 className="grid gap-1 items-start relative">
          <span className="block bg-green-400 rounded-full w-2 h-2 absolute top-[8px]"></span>
          <span className="ml-4  -mb-2 "> 08:30 PM</span>{" "}
          {/* {format(new Date(event?.date), "MMMM do, yyyy h:mma")} */}
        </h2>
        <article className="text-sm ">
          {event.type}
          <p>
            {" "}
            lorem ipsum dolor isan, dolo lorem ipsa glorey fiansl.lorem ipsum
            dolor isan dolo lorem ipsa glorey fiansl lorem ipsum dolor isan dolo
            lorem ipsa glorey fiansl lorem ipsum dolor isan dolo lorem ipsa
            glorey fiansl. dolor isan dolo lorem ipsa glorey fiansl lorem ipsum
            dolor isan dolo lorem ipsa glorey fiansl lorem ipsum dolor isan dolo
            lorem ipsa glorey fiansl
          </p>
          <br />
          <p>
            {" "}
            lorem ipsum dolor isan, dolo lorem ipsa glorey fiansl.lorem ipsum
            dolor isan dolo lorem ipsa glorey fiansl lorem ipsum dolor isan dolo
            lorem ipsa glorey fiansl lorem ipsum dolor isan dolo lorem ipsa
            glorey fiansl.
          </p>
        </article>
        <Button
          className="mt-4  rounded-3xl w-full  "
          size={"lg"}
          variant={"default"}
        >
          Add to calendar
        </Button>
      </section>
    </div>
  );
}
