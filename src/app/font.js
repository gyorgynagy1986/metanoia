import { Quando, Inria_Sans } from "next/font/google";

export const section = Quando({
    subsets: ["latin"],
    weight: ["400"],
    style: ["normal"],
    display: "swap",
});

export const main = Inria_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});
