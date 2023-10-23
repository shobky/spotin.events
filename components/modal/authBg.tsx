import Image from "next/image";
import React from "react";

export default function AuthBg() {
  return (
    <Image
      width={500}
      height={500}
      quality={80}
      priority
      src="/pattern.jpg"
      alt="background-pattern"
      className="absolute w-full h-full top-0 left-0 object-cover bg-[85%] rounded-2xl"
    />
  );
}
