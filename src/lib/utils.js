import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// If you don't have clsx or tailwind-merge installed, run:
// npm install clsx tailwind-merge
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
