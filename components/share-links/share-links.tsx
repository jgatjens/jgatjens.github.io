import React from "react";
import { IconGithub, IconLinkedin, IconTwitch, IconTwitter } from "@/components/icons";

export const ShareLinks = () => (
  <div className="flex">
    <a
      href="https://twitter.com/jgatjens"
      className="h-8 w-8 inline-block mx-4 hover:text-red dark:text-white dark:hover:text-red"
      target="_blank"
    >
      <IconTwitter />
    </a>
    <a
      href="https://github.com/jgatjens"
      className="h-8 w-8 inline-block mx-4 hover:text-red dark:text-white dark:hover:text-red"
      target="_blank"
    >
      <IconGithub />
    </a>
    <a
      href="https://www.linkedin.com/in/jgatjens"
      className="h-8 w-8 inline-block mx-4 hover:text-red dark:text-white dark:hover:text-red"
      target="_blank"
    >
      <IconLinkedin />
    </a>
    <a
      href="https://www.twitch.tv/jgatjens"
      target="_blank"
      className="h-8 w-8 inline-block mx-4 hover:text-red dark:text-white dark:hover:text-red"
    >
      <IconTwitch className="w-full" />
    </a>
  </div>
);
