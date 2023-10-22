"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useDispath, useSelector } from "@/lib/redux";
import { selectSearchQuery } from "@/lib/redux/slices/selectors";
import { Option, searchSlice } from "@/lib/redux/slices/search/reducers";

export default function Filters() {
  const { filters } = useSelector(selectSearchQuery);
  const dispatch = useDispath();
  // const [options, setOptions] = useState(initFilterOptions);

  // const handleOptionClick = (index: number) => {
  //   const newOptions = [...options];
  //   newOptions[index] = {
  //     ...newOptions[index],
  //     checked: !newOptions[index].checked,
  //   };
  //   setOptions(newOptions);
  // };

  const handleOptionClick = (index: number) => {
    dispatch(searchSlice.actions.toogleFiltercheck({ filterIdx: index }));
  };
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((option, index) => (
        <Button
          onClick={() => handleOptionClick(index)} // Pass a function that calls handleOptionClick with the index
          key={index}
          size={"sm"}
          variant={option.checked ? "default" : "outline"}
          className="text-md rounded-3xl font-normal  transition-colors"
        >
          {option.name}
        </Button>
      ))}
    </div>
  );
}
