"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { EventT } from "@/types";
import { useDispath, useSelector } from "@/lib/redux";
import { eventActiveSlice } from "@/lib/redux/slices/eventActive/reducers";
import { MoreHorizontal } from "lucide-react";

export default function EventMoreOptions({ event }: { event: EventT }) {
  const dispatch = useDispath();
  const router = useRouter();

  const handleEditEvent = () => {
    dispatch(eventActiveSlice.actions.selectEditEvent({ event }));
    router.push(`/admin/event/edit/${event.id}`);
  };

  return (
    <div className="mt-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="none"
            className="rounded-full w-full aspect-square p-2  text-white  hover:bg-black/20   "
          >
           <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          <DropdownMenuLabel>Admin actions</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={handleEditEvent}>
              {/* <User className="mr-2 h-4 w-4" /> */}
              Edit
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                {/* <Tags className="mr-2 h-4 w-4" /> */}
                Deligate to
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="p-0">
                <DropdownMenuItem>Tommorow</DropdownMenuItem>
                <DropdownMenuItem>Next week</DropdownMenuItem>
                <DropdownMenuItem>Next month</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              {/* <Trash className="mr-2 h-4 w-4" /> */}
              Remove
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
