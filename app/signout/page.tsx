import React from "react";
import Signout from "@/components/modal/signout";
import { getServerSession } from "next-auth";
import { AuthConfig } from "../api/auth/[...nextauth]/route";
import AuthBg from "@/components/modal/authBg";

export default async function Page() {
  const session = await getServerSession(AuthConfig);
  return (
    <div className="relative text-foreground w-full sm:w-[80%] mt-[15vh] sm:my-0 sm:mx-[10%]  h-[calc(80vh-9.25rem)] sm:h-[calc(100vh-9.25rem)] rounded-2xl flex flex-col items-center justify-center gap-[5vh]">
      <AuthBg />
      <Signout view="page" session={session} />
    </div>
  );
}
