"use client";
import EventDetails from "@/components/events/details";
import Modal from "@/components/modal";
import { useSelector } from "@/lib/redux";
import {
  selectEvents,
  selectSelectedModalEvent,
} from "@/lib/redux/slices/selectors";
import { EventT } from "@/types";
import React from "react";

type Params = {
  id: string;
};

export default function Page(params: Params) {
  const { events } = useSelector(selectEvents);
  const { selectedModalEvent } = useSelector(selectSelectedModalEvent);

  const event: EventT[] = events?.filter(item => item.id === params.id);
  return (
    <Modal>
      <EventDetails view="modal" event={selectedModalEvent || event[0]} />
    </Modal>
  );
}
