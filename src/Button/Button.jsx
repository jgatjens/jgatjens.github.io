import React from "react";
import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, size, label, href }) => {
  const mode = primary ? "btn-primary" : "btn-secondary";

  return (
    <a href={href || "#"} className={[size, mode].join(" ")}>
      {label}
    </a>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["w-auto", "w-1/2", "w-full"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: true,
  size: "w-auto",
  href: "#",
  onClick: undefined,
};
