import ContactUs from "@/components/contact-us";
import React from "react";

const ContactPage = () => {
  return (
    <div className="flex w-screen justify-center max-w-screen-xl 2xl:max-w-screen-2xl m-auto">
      <ContactUs isSeparatePage />
    </div>
  );
};

export default ContactPage;
