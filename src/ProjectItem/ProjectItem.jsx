import React from "react";
/**
 * Primary UI component for user interaction
 */
export const ProjectItem = ({ items }) => (
  <div className="">
    {items.map((item, i) => (
      <div
        key={i}
        // style={{ backgroundColor: item.color }}
        className={`py-4 px-4 text-center
          flex flex-col justify-center rounded-sm
          hover:bg-bluedark hover:cursor-pointer hover:text-white
          transition-colors`}
      >
        <h2 className="text-h2">{item.title}</h2>
        {/* <p className="text-bodysmall">{item.description}</p> */}
      </div>
    ))}
  </div>
);
