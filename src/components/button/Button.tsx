import React from 'react';
import styles from "@/components/button/Button.module.css"

const Button: React.FC = () => {
  return (
    <button className="relative flex items-center justify-center overflow-hidden font-bold px-10 py-3 text-lg rounded-md !bg-brand text-white col-span-2 transition-all before:absolute before:bottom-[-25px] before:left-1/2 before:-translate-x-1/2 before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-700 before:ease-out hover:before:h-[40rem] hover:before:w-[40rem] hover:before:bottom-[-20rem] hover:text-brand">
      <span className="relative z-10">Get Started</span>
    </button>
  );
};

export default Button;
