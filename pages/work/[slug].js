import { WorkDetail, Layout, Meta } from "@/components";
import { getData } from "@/db/index";

export default function WorkDetailPage({ data, nav }) {
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
    <Layout nav={nav} locale={data.locale}>
      <Meta data={seo} />
      <div className="min-h-full flex items-center justify-center flex-col px-5 lg:px-0 border-b-bluedark border-b-4">
        <WorkDetail {...data} />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params, locale }) {
  const res = await getData("projects", locale);
  const nav = await getData("navigation", locale);

  let selectedWork = 0;
  const data = res.items.filter((item, i) => {
    if (item.slug == params.slug) {
      selectedWork = i;
      return item;
    }
  });

  // next
  if (res.items[selectedWork + 1]) {
    data[0].nextWork = res.items[selectedWork + 1].slug;
  } else {
    data[0].nextWork = res.items[0].slug;
  }

  // prev
  if (res.items[selectedWork - 1]) {
    data[0].prevWork = res.items[selectedWork - 1].slug;
  } else {
    data[0].prevWork = res.items[res.items.length - 1].slug;
  }

  data[0].locale = locale;
  data[0].buttonLabel = res.see_work;
  data[0].techTitle = res.tech_title;

  return {
    props: { data: data[0], nav }, // will be passed to the page component as props
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
