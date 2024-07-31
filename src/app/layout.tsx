import type { Metadata } from "next";
import { instrumentSerif, satoshiVariable } from "@/lib/fonts";
import "./globals.css";
import NavBar from "./@nav_bar";

export const metadata: Metadata = {
  title: "Avocado Tech",
  description: "Avocado Tech",
};

interface IProp {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IProp) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${satoshiVariable.variable}`}
    >
      <body className="font-satoshiVariable bg-[#0A0A0A] text-white">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
