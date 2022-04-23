import Head from "next/head";

const Meta = ({ data }) => {
  return (
    <Head>
      <title>{data.metaTitle || "Jairo Gätjens - Website"}</title>
      <meta
        name="description"
        content={
          data.metaDescription ||
          "I'm an experienced Developer based in Costa Rica."
        }
      />
      <meta
        name="keywords"
        content={
          data.metaKeyboards ||
          "Website, Resume, Profile, Github, HTML, CSS, JavaScript"
        }
      />
      <meta name="author" content="Jairo Gätjens" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jgatjens.com/" />
      <meta
        property="og:title"
        content={data.metaTitle || "Jairo Gätjens - Website"}
      />
      <meta
        property="og:description"
        content={
          data.metaDescription ||
          "I'm an experienced Developer based in Costa Rica."
        }
      />
      <meta property="og:image" content={data.metaImage.url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@jgatjens" />
      <meta name="twitter:creator" content="@jgatjens" />
      <meta
        name="twitter:title"
        content={data.metaTitle || "Jairo Gätjens - Website"}
      />
      <meta
        name="twitter:description"
        content={
          data.metaDescription ||
          "I'm an experienced Developer based in Costa Rica."
        }
      />
      <meta name="twitter:image" content={data.metaImage.url} />
    </Head>
  );
};

export default Meta;
