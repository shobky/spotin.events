import Image from "next/image";
import React from "react";
import CalenderBtn from "./calenderBtn";
import AuthBtn from "./authBtn";
import { getServerSession } from "next-auth";
import { AuthConfig } from "@/app/api/auth/[...nextauth]/route";

export default async function Banner() {
  const session = await getServerSession(AuthConfig);
  return (
    <div
      className={
        " absolute sm:relative left-0 top-0 grid place-content-center "
      }
    >
      <Image
        alt={session ? "cleanshores" : "welcome"}
        src={session ? "/cleanshores.jpg" : "/welcome.jpg"}
        blurDataURL={session ? "/cleanshores.jpg" : "/welcome.jpg"}
        className={`${"rounded-b-[25px]  sm:rounded-[25px] object-cover w-full h-full aspect-square "} `}
        priority
        width={400}
        height={400}
        placeholder="blur"
      />
      <div className=" absolute bottom-2 w-full">
        {session ? <CalenderBtn /> : <AuthBtn />}
      </div>
    </div>
  );
}
