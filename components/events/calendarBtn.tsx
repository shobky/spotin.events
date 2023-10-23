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
      variant={checked ? "default" : "ghost"}
      disabled={checked}
      className={`rounded-full p-2 ${
        view === "modal" ? "text-foreground" : "text-white hover:text-white"
      }`}
      size={"icon"}
    >
      {checked ? (
        <CalendarCheck2 className="w-8 h-8" />
      ) : (
        <CalendarPlus className="w-8 h-8" />
      )}
    </Button>
  );
}
