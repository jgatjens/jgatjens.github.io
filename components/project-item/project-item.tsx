import React from "react";
import Link from "next/link";
import { WorkItemProps } from "@/utils/types";

interface ProjectItemProps {
  items: WorkItemProps[];
}

export const ProjectItem = ({ items }: ProjectItemProps) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-1">
    {items.map((item, i) => (
      <Link
        href={`work/${item.slug}`}
        key={i}
        className="hover:bg-black rounded-md hover:text-white p-4 flex flex-col justify-between xl:min-h-[140px] group"
      >
        <div className={`text-left flex flex-col justify-start rounded-sm`}>
          <h3 className="text-h4 font-semibold lg:text-h2">{item.headline}</h3>
        </div>
        <p className="mt-auto text-gray-600 group-hover:text-white">{item.date}</p>
      </Link>
    ))}
  </div>
);
