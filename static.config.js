import React from "react";
import path from "path";
import axios from "axios";

const strapi_url = "http://localhost:1337";

// Typescript support in static.config.js is not yet supported, but is coming in a future update!
export default {
  siteRoot: "/",
  devBasePath: "/",
  productionSourceMaps: true,
  entry: path.join(__dirname, "src", "index.tsx"),
  getRoutes: async () => {
    const { data: home_en } = await axios.get(`${strapi_url}/homepage`);
    const { data: home_es } = await axios.get(
      `${strapi_url}/homepage?_locale=es`
    );

    const { data: resume_en } = await axios.get(`${strapi_url}/resume`);
    const { data: resume_es } = await axios.get(
      `${strapi_url}/resume?_locale=es`
    );

    return [
      {
        path: "/",
        template: "src/pages/index.tsx",
        getData: () => ({ data: home_en }),
      },
      {
        path: "/es",
        template: "src/pages/index.tsx",
        getData: () => ({ data: home_es }),
      },
      {
        path: "/resume",
        template: "src/pages/resume.tsx",
        getData: () => ({ data: resume_en }),
      },
      {
        path: "/es/resume",
        template: "src/pages/resume.tsx",
        getData: () => ({ data: resume_es }),
      },
    ];
  },
  Document: ({ Html, Head, Body, children, state: { renderMeta } }) => (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
        {renderMeta}
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  plugins: [
    "react-static-plugin-typescript",
    "react-static-plugin-styled-components",
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages"),
      },
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap"),
  ],
};
