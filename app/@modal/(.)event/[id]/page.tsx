import EventDetailsWithSession from "@/components/common/calendarAPI/eventDetailsWithSession";
import Modal from "@/components/modal";
import React from "react";

export default async function Page() {
  return (
    <Modal>
      <EventDetailsWithSession view="modal" />
    </Modal>
  );
}
