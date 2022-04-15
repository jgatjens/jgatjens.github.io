import React from "react";
/**
 * Primary UI component for user interaction
 */
export const WorkGrid = ({ items, Image, Link }) => (
  <div class="work-gallery grid grid-cols-2 xl:grid-cols-3 gap-1">
    {items.map((item, i) => (
      <div
        key={i}
        class="work-gallery--item"
        aria-checked="false"
        tabindex="-1"
        aria-label="Select image one"
      >
        <img src={item.url} alt="Image description" />
      </div>
    ))}
  </div>
);
