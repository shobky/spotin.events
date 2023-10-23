import Modal from "@/components/modal";
import React from "react";
import { getServerSession } from "next-auth";
import { AuthConfig } from "@/app/api/auth/[...nextauth]/route";
import Signin from "@/components/modal/signin";
import AuthBg from "@/components/modal/authBg";

export default async function page() {
  const session = await getServerSession(AuthConfig);

  return (
    <Modal>
      <div className="relative text-white w-[90%] sm:w-2/3 aspect-square rounded-2xl p-8 flex flex-col items-center justify-evenly ">
        <AuthBg />
        <Signin session={session} />
      </div>
    </Modal>
  );
}
