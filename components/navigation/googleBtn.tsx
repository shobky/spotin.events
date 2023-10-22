"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";

export const SignInWithGoogle = () => {
  return (
    <Button
      className="flex w-full rounded-xl  h-14 font-normal relative gap-2   overflow-hidde bg-blue-700 text-white hover:opacity-80"
      variant={"none"}
      onClick={() => signIn("google")}
    >
      <Image
        src="/google.svg"
        width={16}
        height={16}
        alt="G"
        className=" bg-white  w-[24%] sm:w-[20%] h-14  p-2 absolute -left-[1px] rounded-l-xl  border border-r-0 border-input "
      />
      <span className="text-center sm:block text-md sm:text-xl ml-[24%]">
        Continue with Google
      </span>
    </Button>
  );
};
