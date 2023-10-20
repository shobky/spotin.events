// import CloseModal from "@/components/modal/close";
import React from "react";

const bgs = [
  "bg-red-400",
  "bg-orange-400",
  "bg-purple-400",
  "bg-lime-400",
  "bg-violet-400",
  "bg-amber-400",
  "bg-cyan-400",
  "bg-emerald-400",
];

let idx = Math.floor(Math.random() * 10);

export default function DetailsSkeleton() {
  return (
    <div
      className={` flex flex-col sm:flex-row flex-shrink-0 h-[100%]  border  rounded-3xl w-full relative text-foreground bg-background `}
    >
      {/* <CloseModal modal={true} /> */}

      <div
        className={`sm:h-full  h-1/2 w-full sm:w-1/2 relative rounded-3xl sm:rounded-r-none animate-pulse ${
          bgs[idx]
        } ${bgs[idx] + "/80"} dark:bg-lime/80`}
      ></div>
      <section
        className={`bg-background rounded-3xl  sm:rounded-l-none p-4 pr-6 w-full flex flex-col sm:w-1/2 gap-2 aspect-square overflow-auto`}
      >
        <span className="block  animate-pulse bg-gray-500 dark:bg-gray-600 w-full h-6 rounded-3xl"></span>
        <span className="block  animate-pulse bg-gray-500 dark:bg-gray-600 w-1/4 h-2 rounded-xl"></span>
        <span className="block  animate-pulse bg-gray-500 dark:bg-gray-600 w-3/4 h-6 mt-[8px] rounded-3xl"></span>

        <span className="block  animate-pulse bg-gray-500 dark:bg-gray-600 w-full h-40 mt-4 rounded-3xl"></span>
        <span className="block  animate-pulse bg-gray-500 dark:bg-gray-600 w-full h-40 rounded-3xl"></span>
        <span className="block  animate-pulse bg-gray-500 dark:bg-gray-600 w-full rounded-3xl h-8 mt-4"></span>
      </section>
    </div>
  );
}
