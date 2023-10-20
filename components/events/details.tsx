import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { EventT, ViewT } from "@/types";
import CloseModal from "../modal/close";

type Props = {
  event: EventT;
  view: ViewT;
};

export default function EventDetails({ event, view }: Props) {
  return (
    <div
      className={` flex flex-col sm:flex-row flex-shrink-0  ${
        view !== "modal" ? "h-[75vh]" : "h-[100%]"
      } ${view && ` border  rounded-3xl`}  w-full relative text-foreground `}
    >
      <CloseModal view={view} />
      <Image
        src={"/hero-card.jpeg"}
        alt=""
        width={300}
        height={400}
        className="rounded-3xl sm:rounded-r-none aspect-square sm:h-full  h-1/2 w-full sm:w-1/2  object-cover "
      />
      <section
        className={` bg-background rounded-3xl  sm:rounded-l-none p-4 w-full  sm:w-1/2 grid gap-2 aspect-square overflow-auto`}
      >
        <div className=" event-details flex justify-between items-center">
          <div>
            {/* @ts-ignore */}
            <h1 className="text-3xl font-semibold">
              {event?.name.stringValue}
            </h1>
            {/* @ts-ignore */}
            <h3 className="font-light text-sm">
              with {event?.facilitator.stringValue}
            </h3>
          </div>
          {/* <SaveButton name={event?.name} /> */}
        </div>
        <hr className=" opacity-15 border-stone-800 " />
        <h2 className="grid gap-1 items-start relative">
          <span className="block bg-green-400 rounded-full w-2 h-2 absolute top-[8px]"></span>
          <span className="ml-4  -mb-2 "> 08:30 PM</span> Wednesday, 27 December
        </h2>
        <article className="text-sm ">
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
