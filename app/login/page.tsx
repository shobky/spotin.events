import CloseModal from "@/components/modal/close";
import { SignInWithGoogle } from "@/components/navigation/googleBtn";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";
import { AuthConfig } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await getServerSession(AuthConfig);
  return (
    <div
      style={{ backgroundImage: "url(/pattern.jpg)" }}
      className="relative text-white w-full sm:w-[80%] mt-[15vh] sm:my-0 sm:mx-[10%] bg-cover bg-no-repeat bg-[85%] h-[calc(80vh-9.25rem)] sm:h-[calc(100vh-9.25rem)] rounded-2xl flex flex-col items-center justify-center gap-[5vh]"
    >
      <Image
        alt="spotin"
        src={"/logo.png"}
        width={400}
        height={400}
        className=" w-[60%] sm:w-[30%] hover:scale-125 ease-in-out duration-500"
      />
      {session ? (
        <div>
          <h1 className="text-lg">
            Your are signed in as {session.user?.name}
          </h1>
        </div>
      ) : (
        <div className="w-[90%] sm:w-[75%] md:w-[70%] lg:w-[35%]">
          <SignInWithGoogle />
        </div>
      )}
    </div>
  );
}
