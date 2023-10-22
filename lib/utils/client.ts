import { EventT } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "util";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
