import { Kurale, Lateef, Leckerli_One } from "next/font/google";
import localFont from "next/font/local";

export const kurale = Kurale({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-kurale",
});

export const lateef = Lateef({
  weight: "400",
  subsets: ["arabic", "latin"],
  variable: "--font-lateef",
});

export const leckerli = Leckerli_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-leckerli",
});

export const lavishly = localFont({
  src: "./fonts/LavishlyYours-Regular.ttf",
  variable: "--font-lavishly",
  display: "swap",
});