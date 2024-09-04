import "./globals.css";
import type { Metadata } from "next";
import { instrumentSerif, satoshiVariable } from "@/lib/fonts";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import { Toaster } from "sonner";
import CustomCursor from "@/components/custom-cursor";
import NavBarMobile from "@/components/nav-bar-mobile";
import Script from "next/script";

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
      <body className="antialiased font-satoshiVariable bg-[#0A0A0A] text-white">
        <CustomCursor />
        <NavBar />
        <div className="sm:hidden">
          <NavBarMobile />
        </div>
        {children}
        <div className="w-screen items-center max-w-screen-xl 2xl:max-w-screen-2xl m-auto mt-36 md:mt-56 px-4">
          <Footer />
        </div>
        <Toaster position="bottom-left" richColors closeButton />
        <Script
          strategy="lazyOnload"
          src="https://embed.tawk.to/66d85ea1ea492f34bc0da069/1i6uj3a22"
        />
      </body>
    </html>
  );
}
