import { AuthConfig } from "@/app/api/auth/[...nextauth]/route";
import EventDetails from "@/components/events/details";
import Modal from "@/components/modal";
import { getServerSession } from "next-auth";
import { cookies } from "next/headers";
import React from "react";

export default async function Page({ params }: { params: { id: string } }) {
  const session = await getServerSession(AuthConfig);
  const cookieStore = cookies();

  const apiKey = process.env.GOOGLE_API_KEY;
  const calendarID = session?.user?.email;
  const accessToken = cookieStore.get("access_token");

  const calendarData = {
    user: session?.user,
    apiKey,
    calendarID,
    accessToken: accessToken?.value,
  };
  return (
    <Modal>
      <EventDetails calendarData={calendarData} view="modal" />
    </Modal>
  );
}
