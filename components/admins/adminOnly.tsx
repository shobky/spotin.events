"use client";
import { useSession } from "next-auth/react";
import React from "react";

export default function ADMINONLY({ children }: { children: React.ReactNode }) {
  const { data } = useSession();
  const pass = data?.user?.email === process.env.NEXT_PUBLIC_ADMIN_IDENTIFIER;
  return <>{true && children}</>;
}
