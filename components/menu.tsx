import React from "react";
import Searchbox from "./common/searchBox";
import Filters from "./common/filters";

export default function Menu() {
  return (
    <div className="min-w-[14.5rem]   ">
      <div className="sm:fixed sm:w-[17%] p-1 min-w-[14.5rem] sm:max-w-[14.5rem] sm:h-[calc(100vh-7rem)] overflow-auto   flex flex-col gap-10 justify-between">
        <h1 className="sm:hidden text-[3.2rem] sm:text-[4rem] font-semibold leading-[3.4rem] sm:leading-[4.4rem] sm:mt-0 mt-[90vw]">
          never miss events with spotin.
        </h1>
        <section className="grid gap-6">
          <Searchbox />
          <Filters />
        </section>
        {/* <Banner /> */}
      </div>
    </div>
  );
}
