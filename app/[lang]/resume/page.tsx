import type { Locale } from "@/i18n-config";
import type { Metadata } from "next";
import { getData } from "@/http/get-data";
import { HeaderResume } from "@/components/header-resume/header-resume";
import { ResumenContent } from "@/components/resumen-content/resumen-content";
import { ShareLinks } from "@/components/share-links/share-links";
import { CTAFooter } from "@/components/cta-footer/cta-footer";
import { getDictionary } from "@/translation";
import { metadata } from "@/utils/metadata";

const page = {
  name: 'resume',
  populate: '?populate[0]=history&populate[1]=open_graph.media'
}


export default async function Work({ params }: { params: { lang: Locale } }) {
  const res = await getData(page, params.lang);
  const data = res.data?.attributes;
  const dict = await getDictionary(params.lang);
  const pdf_link = `/assets/pdf/jgatjens-resume-${params.lang}.pdf`;

  return (
    <>
      <HeaderResume headline={data.headline} lang={params.lang} />

      <div className="container m-auto max-w-3xl py-8 px-5 lg:px-0 print:pt-10 pt-20 md:pt-24">
        <ResumenContent {...data} pdf_link={pdf_link} />
        <ShareLinks />
      </div>

      {/* CTA Footer */}
      <CTAFooter
        lang={params.lang}
        question={dict.work_cta_question}
        subtitle={dict.work_cta_subtitle}
        buttonLabel={dict.work_cta_button}
      />
    </>
  );
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  return metadata({ params, page });
}