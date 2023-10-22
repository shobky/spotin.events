import CloseModal from "@/components/modal/close";
import { SignInWithGoogle } from "@/components/navigation/googleBtn";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";
import { AuthConfig } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await getServerSession(AuthConfig);
  if (session) {
    redirect("/ ");
  }
  return (
    <div className="relative text-foreground w-full h-[85vh] rounded-2xl flex flex-col items-center justify-center gap-[5vh]  ">
      <Image
        alt="spotin"
        src={"/logo.png"}
        width={400}
        height={400}
        className=" w-[80%] sm:w-[30%] hover:scale-125 ease-in-out duration-500"
      />
      <div className="w-full sm:-w-[80%] md:w-[40%]">
        <SignInWithGoogle />
      </div>
    </div>
  );
}
