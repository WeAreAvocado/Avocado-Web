import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

interface IProp {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IProp) {
  return (
    <div className="min-h-[25rem] text-white flex flex-col items-center gap-8 max-w-screen-lg 2xl:max-w-screen-xl m-auto px-4">
      <Link
        href="/services"
        className="flex items-center gap-2 hover:underline w-full mt-8 xs:mt-24"
      >
        <IoArrowBack className="h-5 w-5 text-brand" />
        <span className="font-medium">Back</span>
      </Link>
      <div
        className="
        prose 
        prose-headings:text-white 
        prose-headings:font-semibold 
        prose-h1:text-6xl 
        md:prose-h1:text-7xl 
        prose-h2:text-5xl 
        md:prose-h2:text-6xl 
        prose-h3:text-4xl 
        md:prose-h3:text-5xl 
        prose-h4:text-3xl 
        md:prose-h4:text-4xl 
        prose-h5:text-2xl 
        md:prose-h5:text-3xl 
        prose-h6:text-xl 
        md:prose-h6:text-2xl 
        prose-p:text-lg 
        md:prose-p:text-xl 
        prose-p:text-[#C7C7C7] 
        prose-a:text-brand 
        prose-ol:text-[#C7C7C7] 
        prose-ul:text-[#C7C7C7] 
        prose-li:text-[#C7C7C7] 
        min-w-full
      "
      >
        {children}
      </div>
    </div>
  );
}
