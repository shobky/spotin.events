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
    <div className="flex relative items-center">
      <Input
        autoComplete="off"
        name="searchQuery"
        type="text"
        value={searchQuery}
        onChange={e =>
          dispatch(searchSlice.actions.search({ q: e.target.value }))
        }
        placeholder="Quick Search.."
        className="pr-10 h-10 w-full text-md rounded-xl"
      />
      <Button
        onClick={() => dispatch(searchSlice.actions.search({ q: "" }))}
        size={"icon"}
        variant={"secondary"}
        className=" absolute right-0 scale-50 rounded-3xl"
      >
        <X />
      </Button>
    </div>
  );
}
