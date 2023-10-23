import { EventT } from "@/types";
import Image from "next/image";

export const EmptyEventList = () => {
  return (
    <div className={`flex flex-col justify-center items-center gap-4 `}>
      <p className="text-semibold text-lg opacity-75 text-foreground/90 ">
        That was all the events we have.
      </p>
      <Image
        src="/sadGirl.png"
        width={200}
        height={200}
        alt="sad little cartoon girl "
        className="w-[200px]"
        style={{ filter: "drop-shadow(5px 5px 25px var(--shadow))" }}
      />
    </div>
  );
};

// ${
//     recommendedEvents
//       ? " w-[95vw] sm:w-[40vw]"
//       : "w-[calc(100vw-2rem)] sm:w-[65vw] sm:h-[70vh]"
//   }
