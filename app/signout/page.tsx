import React from "react";
import Signout from "@/components/modal/signout";
import { getServerSession } from "next-auth";
import { AuthConfig } from "../api/auth/[...nextauth]/route";

export default async function Page() {
  const session = await getServerSession(AuthConfig);
  return (
    <div
      style={{ backgroundImage: "url(/pattern.jpg)" }}
      className="relative text-foreground w-full sm:w-[80%] mt-[15vh] sm:my-0 sm:mx-[10%] bg-cover bg-no-repeat bg-[85%] h-[calc(80vh-9.25rem)] sm:h-[calc(100vh-9.25rem)] rounded-2xl flex flex-col items-center justify-center gap-[5vh]"
    >
      <Signout view="page" session={session} />
    </div>
  );
}
