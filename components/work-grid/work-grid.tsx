import React from "react";

interface WorkGridProps {
  items: {
    url: string;
  }[];
}

export const WorkGrid = ({ items }: WorkGridProps) => (
  <div className="work-gallery grid grid-cols-2 xl:grid-cols-3 gap-1">
    {items.map((item, i) => (
      <div
        key={i}
        className="work-gallery--item"
        aria-checked="false"
        tabIndex={-1}
        aria-label="Select image one"
      >
        <img src={item.url} alt="Image description" />
      </div>
    ))}
  </div>
);
