import { getData } from "@/api/get-data";
import { WorkDetail } from "@/components/work-detail/work-detail";
import { getDictionary } from "@/get-diccionary";
import { Locale } from "@/i18n-config";

interface ParamsProps {
  params: {
    lang: Locale;
    slug: string;
  };
}

// This function gets called at build time
export async function generateStaticParams() {
  const populate = `work?populate=items.media`;
  const resEn = await getData(populate, "en");
  const resEs = await getData(populate, "es");
  const dataEn = resEn.data?.attributes;
  const dataEs = resEs.data?.attributes;

  const pathsEn = dataEn.items.map((item: any) => ({
    slug: item.slug.toLowerCase(),
    lang: "en",
  }));

  const pathsEs = dataEs.items.map((item: any) => ({
    slug: item.slug.toLowerCase(),
    lang: "es",
  }));

  const paths = [...pathsEn, ...pathsEs];
  return paths;
}

export default async function WorkDetailPage({ params }: ParamsProps) {
  const t = await getDictionary(params.lang);
  const populate = `work?populate[0]=items.media`;
  const res = await getData(populate, params?.lang);
  const data = res.data?.attributes;

  // find items by slug
  let selectedWork = 0;
  const project = data.items.find((item: any, i: number) => {
    if (item.slug.toLowerCase() === params.slug) {
      selectedWork = i;
      return true;
    }
  });

  if (data.items[selectedWork + 1]) {
    project.url_next_work = data.items[selectedWork + 1].slug;
  } else {
    project.url_next_work = data.items[0].slug;
  }

  // prev
  if (data.items[selectedWork - 1]) {
    project.url_prev_work = data.items[selectedWork - 1].slug;
  } else {
    project.url_prev_work = data.items[data.items.length - 1].slug;
  }

  project.media = project.media?.data?.attributes ?? null;

  project.lang = params.lang;
  project.t_button_label = t.work_detail_url;
  project.t_tech_title = t.work_detail_tech;

  return (
    <div className="flex justify-center flex-col px-5 lg:px-0">
      <WorkDetail {...project} />
    </div>
  );
}
