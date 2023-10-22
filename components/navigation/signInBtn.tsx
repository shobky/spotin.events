"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function SignInBtn() {
  const router = useRouter();
  return <Button onClick={() => router.push("/login")}>Sign In</Button>;
}
