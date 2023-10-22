import React from "react";
import { ThemeToggler } from "@/components/common/themeToggler";
import Image from "next/image";
import Avatar from "./avatar";
import { SignInWithGoogle } from "./googleBtn";
import Link from "next/link";
import { Session } from "next-auth";

export default async function Navigation({
  session,
}: {
  session: Session | null;
}) {
  return (
    <div className="relative h-[4rem] box-border mb-4">
      <div className="sm:fixed sm:bg-background left-0 top-0 w-full h-[4rem] sm:px-10 px-4 relative z-40  flex items-center justify-between">
        <Link href={"/"}>
          <Image
            alt="spotin"
            src={"/logo.png"}
            width={100}
            height={100}
            className="w-11  aspect-square"
          />
        </Link>
        <div className="flex justify-end items-center gap-2">
          <ThemeToggler />
          {session ? <Avatar /> : <SignInWithGoogle />}
        </div>
      </div>
    </div>
  );
}
