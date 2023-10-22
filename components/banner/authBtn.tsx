"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function AuthBtn() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    return setLoading(false);
  }, []);
  return (
    <Link
      href={"/login"}
      className=" w-[calc(100%-1rem)] flex items-center justify-center p-1 h-14 text-white text-md font-light gap-2 backdrop-blur-2xl mx-2 rounded-3xl "
    >
      Welcome back!
      <span className="font-normal flex items-center bg-primary bg-opacity-20 hover:bg-orange-500 py-2 px-3  gap-1 rounded-3xl">
        Sign In
      </span>
    </Link>
  );
}
