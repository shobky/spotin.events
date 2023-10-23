import { AuthConfig } from "@/app/api/auth/[...nextauth]/route";
import EventDetails from "@/components/events/details";
import { DetailsVariant, EventT } from "@/types";
import { getServerSession } from "next-auth";
import { cookies } from "next/headers";
import React from "react";

export default async function EventDetailsWithSession({
  view,
  eventFromPage,
}: {
  view: DetailsVariant;
  eventFromPage?: EventT;
}) {
  const session = await getServerSession(AuthConfig);
  const cookieStore = cookies();
  const accessTokenCookie = cookieStore.get("access_token");
  const accessToken = accessTokenCookie?.value;

  const calendarData = {
    session,
    accessToken,
  };

  return (
    <EventDetails
      view={view}
      eventFromPage={eventFromPage}
      calendarData={calendarData}
    />
  );
}
