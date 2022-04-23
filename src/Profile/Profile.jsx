import React from "react";
import PropTypes from "prop-types";
import { Button } from "../Button/Button";
import { ShareLinks } from "../ShareLinks/ShareLinks";
import Image from "next/image";

/**
 * Primary UI component for user interaction
 */
export const Profile = ({ image, title, location, description, button }) => (
  <div className="text-center max-w-[245px]">
    <div className="w-36 h-36 m-auto dark:rounded-full dark:mb-5">
      <Image
        src={image.url}
        width={image.width}
        height={image.height}
        alt="Jairo Gatjens"
      />
    </div>
    <h1 className="text-h1 font-semibold mb-6 dark:text-white">
      {title}
      <small className="text-bodysmall font-normal block pt-2">
        {location}
      </small>
    </h1>
    <Button label={button.label} link size="w-full" />
    <p className="text-bodysmall mt-6 dark:text-white">{description}</p>
    <div className="mt-6">
      <ShareLinks />
    </div>
  </div>
);

Profile.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  address: PropTypes.string,
  desc: PropTypes.string,
  button: PropTypes.shape({
    label: PropTypes.string,
    link: PropTypes.string,
  }),
};

Profile.defaultProps = {
  img: "/assets/img/profile.jpg",
  title: "Jairo Gätjens",
  address: "Santa Teresa, Costa Rica",
  desc: "Experienced Software Developer based in Costa Rica.",
  button: {
    label: "hire me",
    link: "mailto:jgatjens@gmail.com",
  },
};
