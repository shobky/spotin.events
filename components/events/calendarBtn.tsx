"use client";
import React, { useState } from "react";
import { EventT } from "@/types";
import { Button } from "../ui/button";
import { CalendarPlus, CalendarCheck2 } from "lucide-react";
export default function CalendarBtn({ event }: { event: EventT }) {
  const [checked, setChecked] = useState(event.checked);
  return (
    <Button
      disabled={checked}
      variant={checked ? "default" : "ghost"}
      className={`rounded-3xl ${
        !checked && "hover:bg-black/20"
      } text-white hover:text-white`}
      size={"icon"}
    >
      {checked ? <CalendarCheck2  /> : <CalendarPlus  />}
    </Button>
  );
}
