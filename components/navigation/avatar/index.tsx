import React from "react";
import { AvatarMenu } from "./menu";
import { getServerSession } from "next-auth";
import { AuthConfig } from "@/app/api/auth/[...nextauth]/route";

export default async function Avatar() {
  const session = await getServerSession(AuthConfig);
  const user = session?.user;

  return <AvatarMenu user={user} />;
}
