import type { Locale } from "@/i18n-config";
import type { Metadata } from "next";
import { getData } from "@/http/get-data";
import { HeaderResume } from "@/components/header-resume/header-resume";
import { ResumenContent } from "@/components/resumen-content/resumen-content";
import { ShareLinks } from "@/components/share-links/share-links";
import { metadata } from "@/utils/metadata";

const page = {
  name: 'resume',
  populate: '?populate[0]=history&populate[1]=open_graph.media'
}


export default async function Work({ params }: { params: { lang: Locale } }) {
  const res = await getData(page, params.lang);
  const data = res.data?.attributes;
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

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  return metadata({ params, page });
}