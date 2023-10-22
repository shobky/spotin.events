"use client";
import React, { useState } from "react";
import { EventT, ViewT } from "@/types";
import { Button } from "../ui/button";
import { CalendarPlus, CalendarCheck2 } from "lucide-react";
export default function CalendarBtn({
  event,
  view,
}: {
  event: EventT;
  view?: ViewT;
}) {
  const [checked, setChecked] = useState(event.checked);
  return (
    <Button
      disabled={checked}
      variant={checked ? "default" : "ghost"}
      className={`rounded-3xl ${!checked && "hover:bg-black/20"} ${
        view === "modal" ? "text-foreground" : "text-white hover:text-white"
      }`}
      size={"icon"}
    >
      {checked ? <CalendarCheck2 /> : <CalendarPlus />}
    </Button>
  );
}
