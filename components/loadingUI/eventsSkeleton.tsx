import React from "react";

export default function EventsSkeleton() {
  const bgs = [
    "bg-red-400",
    "bg-orange-400",
    "bg-purple-400",
    "bg-lime-400",
    "bg-violet-400",
    "bg-amber-400",
    "bg-cyan-400",
    "bg-emerald-400",
  ];

  return (
    <>
      {bgs.map(color => {
        return (
          <div
            key={color}
            className={`w-full aspect-square relative rounded-3xl animate-pulse ${color} dark:${
              color + "/70"
            }`}
          ></div>
        );
      })}
    </>
  );
}
