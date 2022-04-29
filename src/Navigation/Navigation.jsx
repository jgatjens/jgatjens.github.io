import React from "react";
import { IconDotSquare } from "../Icons/Icons";
import { useRouter } from "next/router";
import Link from "next/link";
import { route } from "next/dist/server/router";
/**
 * Primary UI component for user interaction
 */

export const Navigation = ({
  resumeTitle,
  workTitle,
  color = "text-black",
}) => {
  const router = useRouter();

  const lan = router.locales.find((locale) => locale != router.locale);
  const pathname = router.asPath;

  return (
    <div className={`flex justify-between px-5 pt-4 ${color}`}>
      <div className="flex items-center  gap-3">
        <Link href="/">
          <a>
            <IconDotSquare className="w-5 h-5 dark:text-white cursor-pointer" />
          </a>
        </Link>

        <Link locale={lan} href={pathname}>
          <a className="hover:text-red text-link dark:text-white hover:dark:text-red uppercase">
            {lan}
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
