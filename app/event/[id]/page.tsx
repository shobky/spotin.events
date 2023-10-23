import React from "react";
import Searchbox from "@/components/common/searchBox";
import Filters from "@/components/common/filters";
import DetailsSkeleton from "@/components/loadingUI/detailsSkeleton";
import { localEventList } from "@/lib/redux/slices/events/reducers";
import Events from "@/components/events";
import EventDetailsWithSession from "@/components/common/calendarAPI/eventDetailsWithSession";

export default async function Page({ params }: { params: { id: string } }) {
  // let events: EventT[] = await getEvents(8);
  // if (!events) {
  //   return <p>something went wrong</p>;
  // }

  let events = localEventList;

  return (
    <div className=" flex flex-col md:flex-row justify-between gap-10 ">
      <div className="md:w-[70%]">
        <div
          style={{ height: "calc(100vh - 7rem)", minHeight: "400px" }}
          className="md:fixed w-full md:w-[55%] "
        >
          <>
            {events ? (
              <EventDetailsWithSession
                view="page"
                eventFromPage={events.filter(e => e.id === params.id)[0]}
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
        <Events data={events.filter(e => e.id !== params.id)} />
      </div>
    </div>
  );
}
