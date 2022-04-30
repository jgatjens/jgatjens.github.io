import React from "react";
import Link from "next/link";
/**
 * Primary UI component for user interaction
 */
export const ProjectItem = ({ items }) => (
  <div className="grid grid-cols-2 lg:gap-8">
    {items.map((item, i) => (
      <Link href={`/work/${item.slug}`} key={i}>
        <div
          // style={{ backgroundColor: item.color }}
          className={`py-4 px-4 text-center underline
          flex flex-col justify-center rounded-sm 
          hover:bg-gray hover:cursor-pointer hover:text-white
          transition-colors`}
        >
          <h2 className="text-h4 lg:text-h2">{item.title}</h2>
          {/* <p className="text-bodysmall">{item.description}</p> */}
        </div>
      </Link>
    ))}
  </div>
);
