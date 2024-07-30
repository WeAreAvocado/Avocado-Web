import type { Metadata } from "next";
import { instrumentSerif, satoshiVariable } from "@/lib/fonts";
import "./globals.css";
import NavBar from "@/components/nav-bar";

export const metadata: Metadata = {
  title: "Avocado Tech",
  description: "Avocado Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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

