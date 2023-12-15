import { getData } from "@/api/get-data";
import { HeaderResume } from "@/components/header-resume/header-resume";
import { ResumenContent } from "@/components/resumen-content/resumen-content";
import { ShareLinks } from "@/components/share-links/share-links";
import type { Locale } from "@/i18n-config";

export default async function Work({ params }: { params: { lang: Locale } }) {
  const populate = `resume?populate=*`;
  const res = await getData(populate, params.lang);
  const data = res.data?.attributes;

  console.log(data);

  const pdf_link = `/assets/pdf/jgatjens-resume-${params.lang}.pdf`;

  return (
    <>
      <HeaderResume headline={data.headline} lang={params.lang} />

      <div className="container m-auto max-w-xl py-8  px-5 lg:px-0 print:pt-10">
        <ResumenContent {...data} pdf_link={pdf_link} />
        <ShareLinks />
      </div>
    </>
  );
}
