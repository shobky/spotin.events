"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useDispath, useSelector } from "@/lib/redux";
import { selectSearchQuery } from "@/lib/redux/slices/selectors";
import { searchSlice } from "@/lib/redux/slices/search/reducers";
import { FilterIcon } from "lucide-react";

export default function Filters() {
  const { filters } = useSelector(selectSearchQuery);
  const dispatch = useDispath();
  const handleOptionClick = (index: number) => {
    dispatch(searchSlice.actions.toogleFiltercheck({ filterIdx: index }));
  };
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((option, index) => (
        <Button
          onClick={() => handleOptionClick(index)}
          key={index}
          size={"sm"}
          variant={option.checked ? "default" : "outline"}
          className="text-md rounded-3xl font-normal  transition-colors flex gap-1" 
        >
          {option.icon && <option.icon className="w-3" />}
          {option.name}
        </Button>
      ))}
    </div>
  );
}
