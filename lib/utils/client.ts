import { EventT } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "util";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  const monthName = format(date, "MMMM");
  const day = format(date, "do");
  const year = format(date, "yyyy");

  // Check if the day ends with "1", "2", or "3" for appropriate ordinal suffix
  let dayWithSuffix = day;
  if (day.endsWith("1") && !day.endsWith("11")) {
    dayWithSuffix += "st";
  } else if (day.endsWith("2") && !day.endsWith("12")) {
    dayWithSuffix += "nd";
  } else if (day.endsWith("3") && !day.endsWith("13")) {
    dayWithSuffix += "rd";
  } else {
    dayWithSuffix += "th";
  }

  return `${monthName} ${dayWithSuffix}, ${year}`;
}
