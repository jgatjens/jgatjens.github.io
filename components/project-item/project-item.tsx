import React from "react";
import Link from "next/link";

interface ProjectItemProps {
  items: {
    headline: string;
    description: string;
    color: string;
    slug: string;
  }[];
}

export const ProjectItem = ({ items }: ProjectItemProps) => (
  <div className="grid grid-cols-2 lg:gap-2">
    {items.map((item, i) => (
      <Link href={`/work/${item.slug}`} key={i}>
        <div
          className={`py-4 px-4 text-center
          flex flex-col justify-start rounded-sm
          hover:bg-gray hover:cursor-pointer hover:text-white
          transition-colors`}
        >
          <h2 className="text-h4 lg:text-h2">{item.headline}</h2>
        </div>
      </Link>
    ))}
  </div>
);
