"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";

interface Option {
  name: string;
  checked: boolean;
}

const initOptions: Option[] = [
  { name: "workshops", checked: false },
  { name: "language", checked: false },
  { name: "courses", checked: false },
  { name: "clubs", checked: false },
  { name: "events", checked: false },
];

export default function Filters() {
  const [options, setOptions] = useState(initOptions);

  const handleOptionClick = (index: number) => {
    const newOptions = [...options];
    newOptions[index] = {
      ...newOptions[index],
      checked: !newOptions[index].checked,
    };
    setOptions(newOptions);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option, index) => (
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
