import { AuthConfig } from "@/app/api/auth/[...nextauth]/route";
import Modal from "@/components/modal";
import Signout from "@/components/modal/signout";
import { getServerSession } from "next-auth";
import React from "react";

export default async function Page() {
  const session = await getServerSession(AuthConfig);
  return (
    <Modal>
      <div
        style={{ backgroundImage: "url(/pattern.jpg)" }}
        className="relative text-white bg-cover bg-no-repeat bg-[85%] w-[90%] sm:w-2/3 aspect-square rounded-2xl p-8 flex flex-col items-center justify-evenly "
      >
        <Signout session={session} />
      </div>
    </Modal>
  );
}
