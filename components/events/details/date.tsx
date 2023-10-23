import { format } from "date-fns";
import React from "react";

export default function DetailsDate({ date }: { date: Date }) {
  return (
    <h2 className="grid gap-1 items-start relative text-sm text-secondary-foreground" >
      <span>In {format(new Date(), "MMMM do, yyyy - h:mma")}</span>
    </h2>
  );
}
