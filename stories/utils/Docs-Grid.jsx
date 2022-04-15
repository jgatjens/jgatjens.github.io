import React from "react";

const css = `
.sbdocs.sbdocs-content {
  max-width: 1440px;
}
`;
const DocsGrid = () => (
  <>
    <style>{css}</style>
    <div className="container mx-auto mb-5">
      <p>
        Go to
        <a
          className="text-blue px-1"
          target={"_blank"}
          href="https://tailwindcss.com/docs/flex-basis"
        >
          Tailwindcss Flex Basis
        </a>
        docs to know more.
      </p>
    </div>
    <div className="container mx-auto">
      <div
        className="grid md:grid-cols-12 gap-8"
        style={{ minHeight: "500px" }}
      >
        <div className="p-4 shadow-sm bg-red w-full h-full rounded"></div>
        <div className="p-4 shadow-sm bg-red w-full h-full rounded"></div>
        <div className="p-4 shadow-sm bg-red w-full h-full rounded"></div>
        <div className="p-4 shadow-sm bg-red w-full h-full rounded"></div>
        <div className="p-4 shadow-sm bg-red w-full h-full rounded"></div>
        <div className="p-4 shadow-sm bg-red w-full h-full rounded"></div>
        <div className="p-4 shadow-sm bg-red w-full h-full rounded"></div>
        <div className="p-4 shadow-sm bg-red w-full h-full rounded"></div>
        <div className="p-4 shadow-sm bg-red w-full h-full rounded"></div>
        <div className="p-4 shadow-sm bg-red w-full h-full rounded"></div>
        <div className="p-4 shadow-sm bg-red w-full h-full rounded"></div>
        <div className="p-4 shadow-sm bg-red w-full h-full rounded"></div>
      </div>
    </div>

    <div className="container mx-auto mt-7">
      <div className="p-4 shadow-sm bg-red w-full text-white h-full rounded text-center text-h4">
        Container Width
      </div>
    </div>
  </>
);

export default DocsGrid;
