import type { Locale } from "@/i18n-config";
import type { Metadata } from "next";
import { getData } from "@/http/get-data";
import { ResumeHero } from "@/components/resume-hero";
import { CoreExpertise } from "@/components/core-expertise";
import { ResumenContent } from "@/components/resumen-content/resumen-content";
import { metadata } from "@/utils/metadata";
import { getDictionary } from "@/translation";

const page = {
  name: 'resume',
  populate: '?populate[0]=history&populate[1]=open_graph.media'
}


export default async function Work({ params }: { params: { lang: Locale } }) {
  const res = await getData(page, params.lang);
  const data = res.data?.attributes;
  const dict = getDictionary(params.lang);

  return (
    <>
      <ResumeHero
        headline={data.headline}
        location={data.location}
        email={data.email}
        lang={params.lang}
        t={dict}
      />

      <CoreExpertise t={dict} />

      <ResumenContent {...data} lang={params.lang} t={dict} />
    </>
  );
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  return metadata({ params, page });
}