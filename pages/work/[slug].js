import { getData } from "@/db/index";
import Meta from "../components/Meta";
import Layout from "../components/Layout";
import { WorkDetail } from "@/components/WorkDetail/WorkDetail";

export default function WorkDetailPage({ data, nav, locale, buttonLabel }) {
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
      <div className="flex items-center justify-center h-full flex-col">
        <WorkDetail {...data} buttonLabel={buttonLabel} />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params, locale }) {
  const res = await getData("projects", locale);
  const nav = await getData("navigation", locale);
  const buttonLabel = res.see_work;

  const data = res.items.filter((item) => item.slug == params.slug);

  // const data = res.items.filter((item, index) => {
  //   if (item.slug === params.slug) {
  //     let next;
  //     if (index < res.items) {
  //       next = res.items[index + 1];
  //     } else {
  //       next = res.items[0].slug;
  //     }

  //     item.nextSlug = next;

  //     return item;
  //   }
  // });

  return {
    props: { data: data[0], nav, locale, buttonLabel }, // will be passed to the page component as props
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
