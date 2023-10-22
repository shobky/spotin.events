import Modal from "@/components/modal";
import CloseModal from "@/components/modal/close";
import { SignInWithGoogle } from "@/components/navigation/googleBtn";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <Modal>
      <div className="relative bg-secondary text-foreground border border-input w-[90%] sm:w-2/3 aspect-square rounded-2xl p-8 flex flex-col items-center justify-evenly ">
        <CloseModal view={"modal"} />
        <Image
          alt="spotin"
          src={"/logo.png"}
          width={400}
          height={400}
          className=" w-[60%]  aspect-square hover:scale-125 ease-in-out duration-500"
        />

        <div className="w-full sm:w-[90%]">
          <SignInWithGoogle />
        </div>
      </div>
    </Modal>
  );
}
