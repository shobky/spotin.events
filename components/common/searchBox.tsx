"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { useDispath, useSelector } from "@/lib/redux";
import { selectSearchQuery } from "@/lib/redux/slices/selectors";
import { searchSlice } from "@/lib/redux/slices/search/reducers";

export default function Searchbox() {
  const { searchQuery } = useSelector(selectSearchQuery);
  const dispatch = useDispath();

  return (
    <Input
      type="text"
      value={searchQuery}
      onChange={e =>
        dispatch(searchSlice.actions.search({ q: e.target.value }))
      }
      placeholder="Quick Search.."
      className="py-2 h-10 w-full text-md rounded-xl"
    />
  );
}
