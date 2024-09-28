import "./globals.css";
import type { Metadata,Viewport } from "next";
import { instrumentSerif, satoshiVariable } from "@/lib/fonts";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import { Toaster } from "sonner";
import CustomCursor from "@/components/custom-cursor";
import NavBarMobile from "@/components/nav-bar-mobile";
import Script from "next/script";
import { FAQPage, WithContext } from "schema-dts";
import { GoogleAnalytics } from '@next/third-parties/google'


const jsonLd: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why should my password be unique?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you use the same password for both your email account and your bank account login, an attacker only needs to steal one password to get access to both accounts, doubling your exposure. If you've used that same password for 14 different accounts, you're making the attacker's job very, very easy. You can protect yourself by using a our <a href=\"https://shipped.club/free-tools/secret-password-generator\">Secret Password Generator</a> to create unique passwords.",
      },
    }
  ],
  headline: "Strong Random Secrets and Password Generator",
  description:
    "Free online tool to generate random strings and passwords in various formats.",
  author: {
    "@type": "Person",
    name: "Luca Restagno",
    url: "https://lucarestagno.com",
  },
  image: "",
  datePublished: "2023-12-10",
  dateModified: "2023-12-28",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: "Avocado Tech | Premier IT & Digital Marketing Solutions in Mumbai",
  description: "Avocado Tech is a premier IT Service and IT Consultant Company based in Mumbai, India. We specialize in a wide array of services including Digital Marketing, Web Design & Redesign,creative marketing agency, advertising agency near me, ppc in digital marketing, online marketing company. Our experienced team delivers customized, high-quality solutions designed to drive business growth and enhance digital experiences. At Avocado Tech, we focus on providing exceptional value and results, making us your ideal partner for innovative technology solutions.",
  keywords: "creative marketing agency, advertising agency near me, ppc in digital marketing, online marketing company, application devlelopment company at india, digital marketing solutions, Business Consulting, digital marketing agency, Digital Marketing services",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    type: "website",
    url: "https://www.avocadotech.com",
    title: "Avocado Tech - Innovative Web Solutions",
    description: "Explore Avocado Tech's modern and cutting-edge digital services for web and tech solutions.",
    images: [
      {
        url: "https://www.avocadotech.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Avocado Tech - Innovative Web Solutions"
      }
    ]
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Avocado Tech - Innovative Web Solutions",
    description: "Leading provider of modern web development and tech solutions.",
    images: ['https://www.avocadotech.com/twitter-image.png']
  },
  alternates: {
    canonical: 'https://www.avocadotech.in/',
    languages: {
      'en-US': '/en-US',
    },
  },
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
