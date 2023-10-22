"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { useDispath, useSelector } from "@/lib/redux";
import { selectSearchQuery } from "@/lib/redux/slices/selectors";
import { searchSlice } from "@/lib/redux/slices/search/reducers";
import { Button } from "../ui/button";
import { X } from "lucide-react";

export default function Searchbox() {
  const { searchQuery } = useSelector(selectSearchQuery);
  const dispatch = useDispath();

  return (
    <div className="flex realtive items-center">
      <Input
        type="text"
        value={searchQuery}
        onChange={e =>
          dispatch(searchSlice.actions.search({ q: e.target.value }))
        }
        placeholder="Quick Search.."
        className="py-2 pr-10 h-10 w-full text-md rounded-xl"
      />
      <Button
        onClick={() => dispatch(searchSlice.actions.search({ q: "" }))}
        size={"icon"}
        variant={"secondary"}
        className=" scale-50 mr-2 absolute right-0 rounded-3xl aspect-square"
      >
        <X />
      </Button>
    </div>
  );
}
