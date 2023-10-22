"use client";
import React from "react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export default function SignoutBtn() {
  const router = useRouter();

  return (
    <DropdownMenuItem
      onClick={() => router.push("/signout")}
      className="bg-destructive text-destructive-foreground font-medium"
    >
      Sign out
    </DropdownMenuItem>
  );
}
