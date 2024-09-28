import {
  CRMIntegrationIcon,
  DigitalMarketingIcon,
  ECommerceDevelopmentIcon,
  MobileAppDevelopmentIcon,
  PayPerClickServicesIcon,
  ReputationManagementIcon,
  SearchEngineOptimizationIcon,
  SocialMediaOptimizationIcon,
  WebDesignAndRedesignIcon,
  WebsiteDevelopmentIcon,
} from "@/components/icons";

export const PROJECTS = [
  {
    link: "",
    name: "Tact Tik",
    slug: "tact-tik",
    type: "Security App",
    year: "2024",
    description:
      "Tact Tik is a security guard app developed by Avocado Tech for the Canadian market. The app features an easy-to-use UI, ideal for older users. Built with Flutter for native Android and iOS, it incorporates a guard tracking system using Mapbox, ensuring efficient and reliable security management.",
    image: {
      thumbnail: "thumbnail 1.png",
      main: [
        "thumbnail 1.png",
        "Frame 1.png",
        "Frame 2.png",
        "Frame 3.png",
        "Frame 4.png",
      ],
    },
  },


  // {
  //
  //   link: "",
  //   name: "City2Guide",
  //   slug: "city-2-guide",
  //   type: "Travel Website",
  //   year: "2024",
  //   description:
  //     "City2Guide, a travel website designed by Avocado Tech in Mumbai, India, targets travelers aged 22-50. This UI/UX project features a minimalist, clean design, enhancing user experience. Discover sophistication and seamless navigation, crafted for modern travel enthusiasts.",
  //   image: {
  //     thumbnail: "thumbnail.png",
  //     main: [
  //       "thumbnail.png",
  //       "Frame1.png",
  //       "Frame2.png",
  //       "Frame3.png",
  //       "Frame4.png",
  //       "Frame5.png",
  //       "Frame6.png",
  //       "Frame7.png",
  //     ],
  //   },
  // },

  {
    link: "https://play.google.com/store/apps/details?id=com.avocadotech.ganesh_aarthi_app",
    name: "Ganesh Aarti",
    slug: "ganesh-aarti",
    type: "Devotional App",
    year: "2024",
    description:
      "Avocado Tech's Ganesh Aarti app offers a beautifully readable format for all users, focusing on minimalistic design and functionality. Tailored for older individuals yet enjoyable for the younger generation, this Android-exclusive app ensures a seamless and enriching devotional experience.",
    image: {
      thumbnail: "thumbnail 1.png",
      main: ["thumbnail 1.png", "thumbnail 2.png", "Frame 1.png"],
    },
  },
];

export const LINKS = {
  linkedin: "https://www.linkedin.com/company/avocado-tech-services-pvt/",
  instagram: "https://www.instagram.com/avocadotech.in",
  twitter: "https://x.com/alotavocados/",
};

export const NAV_LINKS = [
  {
    name: "Works",
    href: "/works",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const GRAPHIC_DESIGN = [
  {
    name: "1",
    href: "1.jpg",
  },
  {
    name: "2",
    href: "2.jpg",
  },
  {
    name: "3",
    href: "3.jpg",
  },
  {
    name: "4",
    href: "4.jpg",
  },
  {
    name: "5",
    href: "5.jpg",
  },
];

export const BLOG_CATEGORIES = [
  {
    name: "UI/UX",
    href: "ui-ux",
  },
  {
    name: "Web Development",
    href: "web-development",
  },
];

export const SERVICES = [
  {
    name: "Digital Marketing",
    slug: "digital-marketing",
    description: "Boosts online presence via ads, content.",
    icon: DigitalMarketingIcon,
  },
  {
    name: "Web Design & Redesign",
    slug: "web-design-and-redesign",
    description: "Builds or revamps websites for impact.",
    icon: WebDesignAndRedesignIcon,
  },
  {
    name: "Website Development",
    slug: "website-development",
    description: "Creates functional, user-friendly sites.",
    icon: WebsiteDevelopmentIcon,
  },
  {
    name: "Mobile App Development",
    slug: "mobile-app-development",
    description: "Crafts apps for seamless mobile use.",
    icon: MobileAppDevelopmentIcon,
  },
  {
    name: "Reputation Management",
    slug: "reputation-management",
    description: "Protects and improves brand image.",
    icon: ReputationManagementIcon,
  },
  {
    name: "Search Engine Optimization",
    slug: "search-engine-optimization",
    description: "Ranks sites higher on search engines.",
    icon: SearchEngineOptimizationIcon,
  },
  {
    name: "Social Media Optimization",
    slug: "social-media-optimization",
    description: "Enhances social profiles for growth.",
    icon: SocialMediaOptimizationIcon,
  },
  {
    name: "Pay Per Click Services",
    slug: "pay-per-click-services",
    description: "Paid ads drive instant online traffic.",
    icon: PayPerClickServicesIcon,
  },
  {
    name: "E-Commerce Development",
    slug: "e-commerce-development",
    description: "Builds online stores to sell products.",
    icon: ECommerceDevelopmentIcon,
  },
  {
    name: "CRM Integration",
    slug: "crm-integration",
    description: "Syncs customer data for better management.",
    icon: CRMIntegrationIcon,
  },
];
