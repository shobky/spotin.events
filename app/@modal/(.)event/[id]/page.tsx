"use client";
import EventDetails from "@/components/events/details";
import Modal from "@/components/modal";
import { useSelector } from "@/lib/redux";
import { selectEventActive, selectEvents } from "@/lib/redux/slices/selectors";
import { EventT } from "@/types";
import React from "react";

export default function Page({ params }: { params: { id: string } }) {
  const { events } = useSelector(selectEvents);
  const { selectedModalEvent } = useSelector(selectEventActive);

  const event: EventT[] = events?.filter(item => item.id === params.id);
  return (
    <Modal>
      <EventDetails view="modal" event={selectedModalEvent || event[0]} />
    </Modal>
  );
}
