import React from "react";
import Searchbox from "@/components/common/searchBox";
import Filters from "@/components/common/filters";
import EventDetails from "@/components/events/details";
import DetailsSkeleton from "@/components/loadingUI/detailsSkeleton";
import { getEvents } from "@/lib/database/utils";
import { EventT } from "@/types";
import EventList from "@/components/events/eventList";

export default async function Page({ params }: { params: { id: string } }) {
  let events: EventT[] = await getEvents(8);

  if (!events) {
    return <p>something went wrong</p>;
  }
  return (
    <div className=" flex flex-col md:flex-row justify-between gap-10 ">
      <div className="md:w-[70%]">
        <div
          style={{ height: "calc(100vh - 7rem)", minHeight: "400px" }}
          className="md:fixed w-full md:w-[55%] "
        >
          <>
            {events ? (
              <EventDetails
                view="page"
                event={events.filter(e => e.id === params.id)[0]}
              />
            ) : (
              <DetailsSkeleton />
            )}
          </>
        </div>
      </div>
      <div className=" md:w-[50%]  md:pl-2">
        <section className="grid gap-4 pb-6 ">
          <Searchbox />
          <Filters />
        </section>
        <EventList
          recommendedEvents={events.filter(e => e.id !== params.id)}
        />
      </div>
    </div>
  );
}
