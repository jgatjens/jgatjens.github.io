import React from "react";

/**
 * Primary UI component for user interaction
 */
export const ButtonDownload = ({ label }) => (
  <div type="button" className="btn-download print:hidden">
    <svg width="190px" height="50px" viewBox="0 0 190 50" className="svg-anime">
      <polyline points="189,1 189,49 1,49 1,1 189,1" className="bg-line" />
      <polyline points="189,1 189,49 1,49 1,1 189,1" className="hl-line" />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="svg-donwload"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
    <span>{label}</span>
  </div>
);
