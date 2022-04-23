import React from "react";
import { IconDotSquare } from "../Icons/Icons";
import { useRouter } from "next/router";
import Link from "next/link";
/**
 * Primary UI component for user interaction
 */

export const Navigation = ({
  resumeTitle,
  workTitle,
  color = "text-black",
}) => {
  const router = useRouter();
  const lan = router.locale == "es" ? "/" : "es";
  const pathname = lan + router.pathname;

  return (
    <div className={`flex justify-between px-5 pt-4 ${color}`}>
      <div className="flex items-center  gap-3">
        <Link href="/">
          <a>
            <IconDotSquare className="w-5 h-5 dark:text-white cursor-pointer" />
          </a>
        </Link>

        <Link locale={false} href={pathname}>
          <a className="hover:text-red text-link dark:text-white hover:dark:text-red uppercase">
            {router.locale == "es" ? "en" : "es"}
          </a>
        </Link>
      </div>
      <div className="flex gap-3 items-center">
        <Link href="/resume">
          <a className="text-link uppercase hover:text-red dark:text-white hover:dark:text-red">
            {resumeTitle}
          </a>
        </Link>
        <Link href="/work">
          <a className="text-link uppercase hover:text-red dark:text-white hover:dark:text-red">
            {workTitle}
          </a>
        </Link>
      </div>
    </div>
  );
};
