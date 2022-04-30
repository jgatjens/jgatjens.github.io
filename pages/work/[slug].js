import { WorkDetail, Layout, Meta } from "@/components";
import { getData } from "@/db/index";

export default function WorkDetailPage({
  data,
  nav,
  locale,
  buttonLabel,
  techTitle,
}) {
  if (!data) return null;

  const seo = {
    metaTitle: data.title,
    metaDescription: data.description,
    metaKeyboards: "Website, Resume, Profile, Github, HTML, CSS, JavaScript",
    metaImage: {
      url: data.image.url,
    },
  };

  return (
    <Layout nav={nav} locale={locale}>
      <Meta data={seo} />
      <div className="min-h-full flex items-center justify-center flex-col px-5 lg:px-0 border-b-bluedark border-b-4">
        <WorkDetail {...data} techTitle={techTitle} buttonLabel={buttonLabel} />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params, locale }) {
  const res = await getData("projects", locale);
  const nav = await getData("navigation", locale);
  const buttonLabel = res.see_work;
  const techTitle = res.tech_title;

  const data = res.items.filter((item) => item.slug == params.slug);

  return {
    props: { data: data[0], nav, locale, buttonLabel, techTitle }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const dataEn = await getData("projects", "en");
  const dataEs = await getData("projects", "es");

  const pathsEn = dataEn.items.map((item) => ({
    params: { slug: item.slug, locale: "en" },
  }));

  const pathsEs = dataEs.items.map((item) => ({
    params: { slug: item.slug, locale: "es" },
  }));

  const paths = [...pathsEn, ...pathsEs];

  return {
    paths,
    fallback: true, // false or 'blocking'
  };
}
