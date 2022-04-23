import { getData } from "@/db/index";
import Meta from "../components/Meta";
import { WorkDetail } from "@/components/WorkDetail/WorkDetail";
import Layout from "../components/Layout";

export default function WorkSlug({ data, nav, locale }) {
  if (!data) return;

  console.log(data);

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
        <WorkDetail {...data} />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params, locale }) {
  const res = await getData("projects");
  const nav = await getData("navigation", locale);
  const data = res.items.filter((item, index) => {
    if (item.slug === params.slug) {
      let next;
      if (index < res.items) {
        next = res.items[index + 1];
      } else {
        next = res.items[0].slug;
      }

      item.nextSlug = next;

      return item;
    }
  });

  return {
    props: { data: data[0], nav, locale }, // will be passed to the page component as props
  };
}

export async function getStaticPaths({ locale }) {
  const data = await getData("projects");

  const paths = data.items.map((item) => ({
    params: { slug: item.slug },
  }));

  return {
    paths,
    fallback: true, // false or 'blocking'
  };
}
