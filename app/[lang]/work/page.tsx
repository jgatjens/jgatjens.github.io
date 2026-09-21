import type { Locale } from "@/i18n-config";
import { getData } from "@/http/get-data";
import { ProjectItem } from "@/components/project-item/project-item";
import { ShareLinks } from "@/components/share-links/share-links";
import { CTAFooter } from "@/components/cta-footer/cta-footer";
import { metadata } from "@/utils/metadata";
import { getDictionary } from "@/translation";
import { Metadata } from "next";
import { WorkItemProps } from "@/utils/types";

const page = {
  name: 'work',
  populate: '?populate[0]=items&populate[1]=items.media&populate[2]=items.categories&populate[3]=open_graph.media'
}

export default async function Work({ params }: { params: { lang: Locale } }) {
  const res = await getData(page, params.lang);
  const data = res.data?.attributes;
  const dict = getDictionary(params.lang);

  // sort items by date
  const items = data.items.sort((a: WorkItemProps, b: WorkItemProps) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="w-full min-h-screen flex items-start justify-center py-16 md:py-20 lg:py-32">
      <div className="w-full max-w-5xl px-5 lg:px-8">
        {/* Mobile Section Label */}
        <div className="mb-8">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{dict.work_section_label}</p>
        </div>

        {/* Section Header - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:gap-16 mb-12 lg:mb-16">
          {/* Left: Title */}
          <div className="flex flex-col justify-start">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight whitespace-pre-line">
              {dict.work_title}
            </h1>
          </div>

          {/* Right: Description */}
          <div className="flex flex-col justify-start">
            <p className="text-base md:text-lg lg:pl-14 text-gray-600">
              {dict.work_description}
            </p>
          </div>
        </div>

        {/* Projects */}
        <ProjectItem items={items} />

        {/* CTA Section */}
        <div className="mt-16 md:mt-20 lg:mt-24 -mx-5 lg:-mx-8 px-5 lg:px-8 py-12 md:py-16 bg-gray-50 flex flex-col items-center text-center">
          <p className="text-lg md:text-xl text-gray-600 mb-4">{dict.work_cta_question}</p>
          <p className="text-base md:text-lg text-gray-700 mb-8">{dict.work_cta_subtitle}</p>
          <a
            href={`/${params.lang}#contact`}
            className="px-8 py-3 bg-black text-white rounded-md font-medium hover:bg-gray-900 transition-colors"
          >
            {dict.work_cta_button} →
          </a>
        </div>

        <CTAFooter
          lang={params.lang}
          question={dict.work_cta_question}
          subtitle={dict.work_cta_subtitle}
          buttonLabel={dict.work_cta_button}
        />

        {/* Social Links */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <ShareLinks />
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  return metadata({ params, page });
}