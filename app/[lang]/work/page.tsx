import type { Locale } from "@/i18n-config";
import { getData } from "@/http/get-data";
import { ProjectItem } from "@/components/project-item/project-item";
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
    <div className="w-full flex items-start justify-center pt-20 lg:pt-32">
      <div className="w-full max-w-5xl px-5 lg:px-0">
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
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  return metadata({ params, page });
}