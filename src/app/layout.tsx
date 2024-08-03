import "./globals.css";
import type { Metadata } from "next";
import { instrumentSerif, satoshiVariable } from "@/lib/fonts";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import { Toaster } from "sonner";

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
        <div className="w-screen items-center max-w-screen-xl 2xl:max-w-screen-2xl m-auto mt-56">
          <Footer />
        </div>
        <Toaster position="bottom-left" richColors closeButton />
      </body>
    </html>
  );
}
