import Link from "next/link";
import { ProjectItem, Layout, Meta } from "@/components";
import { getData } from "@/db/index";

export default function Work({ data, nav, locale }) {
  return (
    <Layout nav={nav} locale={locale}>
      <Meta data={data.seo} />
      <div className="flex items-center justify-center h-full flex-col">
        <h1 className="text-h1 mb-10 font-bold text-gray text-center">
          {data.Title}
        </h1>
        <ProjectItem items={data.items} Link={Link} />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const data = await getData("projects", locale);
  const nav = await getData("navigation", locale);

  return {
    props: { data, nav, locale }, // will be passed to the page component as props
  };
}
