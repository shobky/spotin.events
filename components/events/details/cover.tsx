import { EventT } from "@/types";
import Image from "next/image";
import React from "react";

export default function DetailsCover({ id }: { id: string }) {
  return (
    <>
      <Image
        // src={event.cover}
        src={`/random/event${id}.jpg`}
        alt=""
        width={400}
        height={800}
        className="aspect-square sm:h-full  h-1/2 w-full sm:w-1/2 object-cover relative z-10 "
      />
      <div className="absolute z-0 aspect-square sm:h-full h-1/2 w-full sm:w-1/2 bg-stone-500 "></div>
    </>
  );
}
