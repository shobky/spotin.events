"use client";
import React, { useState } from "react";
import CloseModal from "@/components/modal/close";
import Image from "next/image";
import { Session } from "next-auth";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import { ViewT } from "@/types";
import Link from "next/link";
import { Loader2Icon } from "lucide-react";
export default function Signout({
  session,
  view,
}: {
  session: Session | null;
  view?: ViewT;
}) {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <CloseModal view={"modal"} />
      <Image
        alt="spotin"
        src={"/logo.png"}
        width={600}
        height={600}
        className={`${
          view === "page" ? "w-[30%]" : "w-[60%]"
        } rounded-full  aspect-square hover:scale-125 ease-in-out duration-500 z-10`}
      />

      <div
        className={`${
          view === "page" ? "sm:w-[40%]" : "sm:w-[90%]"
        } w-full scale-[.85] text-white`}
      >
        {!session ? (
          <h1 className="text-xl font-medium text-center">
            Your are signed out,{" "}
            <Link className=" underline cursor-pointer" href={"/login"}>
              Sign in?
            </Link>
          </h1>
        ) : (
          <Button
            className="flex text-lg font-medium w-full rounded-xl  h-14 relative gap-2   overflow-hidde"
            variant={"destructive"}
            onClick={() => {
              setLoading(true);
              signOut();
            }}
          >
            {loading ? (
              <span className="flex gap-2 text-md sm:text-xl items-center">
                <Loader2Icon className=" animate-spin" /> Signing you out
              </span>
            ) : (
              "Signout"
            )}
          </Button>
        )}
      </div>
    </>
  );
}
