// import Image from "next/image";
import React from "react";
import { Button } from "../Button/Button";
/**
 * Primary UI component for user interaction
 */
export const WorkDetail = ({ title, date, image, description, skills }) => (
  <div className="max-w-xl m-auto pt-14" role="alert">
    <h1 className="text-h1 text-bluedark  mb-14">{title}</h1>
    <h3 className="text-h3 font-bold mb-6"> {date}</h3>
    <p className="text-bodysmall mb-12">{description}</p>
    <p className="text-caption mb-6">
      <b>{skills}</b>
    </p>

    <img
      src={image.url}
      width="520"
      height="340"
      className="mb-14 rounded-md"
    />

    <Button label="SEE PROJECT" />
  </div>
);
