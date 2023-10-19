"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";

export const SignInWithGoogle = () => {
  return (
    <Button
      className="hidden sm:flex rounded-3xl px-2 h-8 text-sm font-normal relative gap-2 overflow-hidden bg-primary text-white hover:opacity-80"
      variant={"none"}
      onClick={() => signIn("google")}
    >
      <Image
        src="/google.svg"
        width={16}
        height={16}
        alt="G"
        className=" bg-white  w-[22px] h-[22px]  rounded-full p-[4px]"
      />
      <span className="text-center block sm:hidden">Sign in </span>
      <span className="text-center sm:block hidden">Sign in with Google</span>
    </Button>
  );
};
