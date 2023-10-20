"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function AuthBtn() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    return setLoading(false);
  }, []);
  return (
    <button
      onClick={() => {
        signIn("google");
        setLoading(true);
      }}
      className=" w-[calc(100%-1rem)] flex items-center justify-center p-1 h-14 text-white text-sm font-light gap-2 backdrop-blur-2xl mx-2 rounded-3xl "
    >
      Welcome back!
      <span className="font-normal flex items-center bg-primary bg-opacity-20 hover:bg-orange-500 p-3  gap-1 rounded-3xl">
        <Image
          src="/spinner.svg"
          width={16}
          height={16}
          alt="G"
          className={
            !loading
              ? "hidden"
              : " relative -left-1 rounded-l-3xl invert animate-spin"
          }
        />{" "}
        Signin
      </span>
    </button>
  );
}
