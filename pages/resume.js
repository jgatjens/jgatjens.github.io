import Link from "next/link";
import { getData } from "../db/index";
import { ShareLinks } from "../src/ShareLinks/ShareLinks";
import { HeaderResume } from "../src/HeaderResume/HeaderResume";
import { ResumenContent } from "../src/ResumenContent/ResumenContent";
import Meta from "./components/Meta";

export default function Resume({ data, locale }) {
  console.log(locale);
  return (
    <>
      <Meta data={data.seo} />
      <HeaderResume title={data.title} locale={locale} Link={Link} />
      <div className="container m-auto max-w-xl py-8 print:pt-10">
        <ResumenContent {...data} />
        <ShareLinks />
      </div>
    </>
  );
}

export async function getStaticProps({ locale, locales }) {
  const data = await getData("resume", locale);

  const lan = locales.filter((lan) => {
    return lan != locale;
  });

  return {
    props: { data, locale: lan[0] }, // will be passed to the page component as props
  };
}
