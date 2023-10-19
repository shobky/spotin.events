"use client";
import React, { useEffect, useState } from "react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";

export default function SignoutBtn() {
  const [loading, setLoading] = useState<boolean>();
  useEffect(() => {
    return setLoading(false);
  }, []);
  return (
    <DropdownMenuItem
      onClick={() => signOut()}
      className="bg-destructive text-destructive-foreground font-medium"
    >
      {loading && "..."} Log out
    </DropdownMenuItem>
  );
}
