import React from "react";
import { IconArrow, IconWorld } from "../Icons/Icons";
import Link from "next/link";
/**
 * Primary UI component for user interaction
 */
export const HeaderResume = ({ title }) => (
  <div className="flex flex-col justify-center items-center w-full h-96 print:h-64 bg-[#202255] relative">
    <div className="header-left resume-header-left"></div>
    <div className="header-left resume-header-right"></div>

    <div className="absolute top-5 flex text-white gap-3 uppercase items-center">
      <IconWorld className="w-5 h-5" />
    </div>

    <Link href="/">
      <a>
        <IconArrow className="text-white relative z-10 mb-5 hover:text-red print:hidden" />
      </a>
    </Link>

    <h1 className="font-sans relative z-10 font-semibold text-4xl text-center text-white max-w-[236px] mb-10 print:max-w-full">
      {title}
    </h1>

    <div className="resume-logo"></div>
  </div>
);
