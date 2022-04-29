import Link from "next/link";
import {
  ShareLinks,
  Layout,
  Meta,
  HeaderResume,
  ResumenContent,
} from "@/components";
import { getData } from "@/db/index";

export default function Resume({ data, nav, locale }) {
  return (
    <Layout nav={nav} locale={locale} color="text-white">
      <Meta data={data.seo} />
      <HeaderResume title={data.title} locale={locale} Link={Link} />
      <div className="container m-auto max-w-xl py-8 print:pt-10">
        <ResumenContent {...data} />
        <ShareLinks />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale, locales }) {
  const data = await getData("resume", locale);
  const nav = await getData("navigation", locale);

  const lan = locales.filter((lan) => {
    return lan != locale;
  });

  return {
    props: { data, locale, nav }, // will be passed to the page component as props
  };
}
