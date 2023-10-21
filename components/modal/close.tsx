"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Cross1Icon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { ViewT } from "@/types";

export default function CloseModal({ view }: { view: ViewT }) {
  const router = useRouter();
  const handleCloseModal = () => {
    if (view === "modal") {
      router.back();
    } else {
      router.push("/");
    }
  };
  return (
    <Button
      disabled={view === "editor-view"}
      variant={"ghost"}
      size={"icon"}
      className=" rounded-full absolute top-0 left-0 m-3 z-20 scale-90 text-white "
      onClick={handleCloseModal}
    >
      <Cross1Icon className="" />
    </Button>
  );
}
