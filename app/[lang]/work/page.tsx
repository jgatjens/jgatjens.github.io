import type { Locale } from "@/i18n-config";
import { getData } from "@/http/get-data";
import { ProjectItem } from "@/components/project-item/project-item";
import { metadata } from "@/utils/metadata";
import { getDictionary } from "@/translation";
import { Metadata } from "next";
import { WorkItemProps } from "@/utils/types";

const page = {
  name: 'work',
  populate: '?populate[0]=items&populate[1]=open_graph.media'
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
    <div className="flex items-center justify-center h-full flex-col ">
      <div className="px-5 lg:px-0 max-w-7xl">
        <h1 className="text-h1 font-semibold text-center mb-8 capitalize">{dict.work}</h1>
        <ProjectItem items={items} />
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  return metadata({ params, page });
}