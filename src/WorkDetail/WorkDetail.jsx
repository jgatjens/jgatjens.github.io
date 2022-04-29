import React from "react";
import { Button } from "../Button/Button";
import Image from "next/image";

const List = ({ items }) => (
  <ul className="list-disc list-inside mb-8 pl-4">
    {items.map((str, i) => {
      if (str.length === 0) {
        return;
      }
      return (
        <li className="text-bodysmall" key={i}>
          {str}
        </li>
      );
    })}
  </ul>
);

export const WorkDetail = ({
  title,
  date,
  image,
  description,
  tech,
  buttonLabel,
  techTitle,
}) => (
  <div className="max-w-xl m-auto my-16" role="alert">
    <h1 className="text-h1 text-bluedark mb-14">{title}</h1>
    <h3 className="text-h3 font-bold mb-6"> {date}</h3>
    <p className="text-bodysmall mb-12">{description}</p>

    <h2 className="text-h4 text-bluedark mb-5">{techTitle}</h2>
    <List items={tech.split("-")}></List>

    <div className="mb-14 font-bold block">
      <Image src={image.url} width="520" height="340" className="rounded-md" />
    </div>

    <Button label={buttonLabel || "SEE PROJECT"} />
  </div>
);
