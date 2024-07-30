import localFont from "next/font/local";
import { Instrument_Serif } from "next/font/google";

export const satoshiVariable = localFont({
  src: "./Satoshi-Variable.woff2",
  display: "swap",
  variable: "--font-satoshi-variable",
});

export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument-serif",
});
