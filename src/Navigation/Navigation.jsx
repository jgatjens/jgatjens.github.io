import React from "react";
import { IconWorld } from "../Icons/Icons";
/**
 * Primary UI component for user interaction
 */
export const Navigation = ({ Link, resumeTitle, workTitle }) => (
  <div className="flex justify-between px-5 pt-2">
    <div className="flex items-center  gap-3">
      <IconWorld className="w-5 h-5 dark:text-white" />
      <Link
        locale={false}
        href="/"
        className="hover:text-red text-link dark:text-white hover:dark:text-red"
      >
        <a>EN</a>
      </Link>
      <Link
        href="/es"
        locale={false}
        className="hover:text-red dark:text-white hover:dark:text-red"
      >
        <a>ES</a>
      </Link>
    </div>
    <div className="flex gap-3 items-center">
      <Link
        className="text-link hover:text-red dark:text-white hover:dark:text-red"
        href="/resume"
      >
        <a>{resumeTitle}</a>
      </Link>
      <Link
        className="text-link hover:text-red dark:text-white hover:dark:text-red"
        href="/work"
      >
        <a>{workTitle}</a>
      </Link>
    </div>
  </div>
);
