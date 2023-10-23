"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useSelector } from "@/lib/redux";
import { selectSearchQuery } from "@/lib/redux/slices/selectors";
import React from "react";

export default function DetailsTypes({ types }: { types: string[] }) {
  const { filters } = useSelector(selectSearchQuery);
  const filteredFilters = filters.filter(
    f => types.includes(f.name.toLowerCase()) || types.includes(f.name)
  );


  return (
    <div className="flex gap-2 flex-wrap">
      {filters.map(f => (
        <Badge
          key={f.name}
          variant={"outline"}
          className="text-sm font-medium rounded-3xl h-8  transition-colors flex items-center gap-1"
        >
          {f.icon && <f.icon className="w-3" />}
          {f.name}
        </Badge>
      ))}
    </div>
  );
}
