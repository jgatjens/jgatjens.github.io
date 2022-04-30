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
  link,
  buttonLabel,
  techTitle,
}) => (
  <div className="max-w-xl m-auto my-20" role="alert">
    <h1 className="text-h1 text-bluedark mb-8">{title}</h1>
    <p className="text-bodysmall mb-6">{description}</p>

    <h2 className="text-h4 text-bluedark mb-5">{techTitle}</h2>
    <List items={tech.split("-")}></List>

    <h3 className="text-h3 font-bold mb-6"> {date}</h3>
    <div className="mb-14 font-bold block">
      <Image src={image.url} width="520" height="340" className="rounded-md" />
    </div>

    <a
      target="_blank"
      href={link}
      className="btn-primary block text-center lg:inline-block"
    >
      {buttonLabel || "SEE PROJECT"}
    </a>
  </div>
);
