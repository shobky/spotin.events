import React from "react";
import Wrapper from "./_wrapper";
import Searchbox from "@/components/common/searchBox";
import Filters from "@/components/common/filters";
import EventDetails from "@/components/events/details";
import DetailsSkeleton from "@/components/loadingUI/detailsSkeleton";

export default async function Page({ params }: { params: { id: string } }) {
  let event: any | undefined;

  try {
    const res = await fetch(
      `https://firestore.googleapis.com/v1/projects/spotin-89dc7/databases/(default)/documents/events/${params.id}`
    );
    const data = await res.json();
    event = data.fields;
  } catch (err) {
    console.log(err);
  }

  if (!event) {
    return <>no event found</>;
  }
  return (
    <div className=" flex flex-col md:flex-row justify-between gap-10 ">
      <div className="md:w-[70%]">
        <div
          style={{ height: "calc(100vh - 7rem)", minHeight: "400px" }}
          className="md:fixed w-full md:w-[55%] "
        >
          <>
            {event ? (
              <EventDetails view="page" event={event} />
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
        {/* <OtherEvents active={params.id} /> */}
      </div>
    </div>
  );
}
