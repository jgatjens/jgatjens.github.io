import type { Metadata } from "next";
import { getData } from "@/http/get-data";
import { WorkItem } from "@/components/work-detail/work-item";
import { getDictionary } from "@/get-diccionary";
import { Locale } from "@/i18n-config";
import { BackendProps, WorkItemProps } from "@/utils/types";

interface WorkDetailProps {
  params: {
    lang: Locale;
    slug: string;
  };
}

const page = {
  name: "work",
  populate: "?populate[0]=items.media&populate[1]=open_graph.media",
};

// This function gets called at build time
export async function generateStaticParams() {
  const resEn = await getData(page, "en");
  const resEs = await getData(page, "es");
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

export default async function WorkDetailPage({ params }: WorkDetailProps) {
  const t = await getDictionary(params.lang);
  const res = await getData(page, params?.lang);
  const data = res.data?.attributes;

  // find items by slug
  let selectedWork = 0;
  const project = data.items.find((item: WorkItemProps, i: number) => {
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
    <section className="flex justify-center flex-col px-5 lg:px-0">
      <WorkItem {...project} />
    </section>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string; slug: string };
}): Promise<Metadata> {
  // read route params
  const locale = params.lang || "en";
  const res: BackendProps = await getData(page, locale);
  const seo = res.data.attributes?.open_graph;

  // find project by slug
  const project: WorkItemProps = res.data.attributes.items.find(
    (item: WorkItemProps) => item.slug.toLowerCase() === params.slug
  );
  const canonical = page.name == "homepage" ? "/" : `/work/${project.slug}`;
  const canonicalLangEn = page.name == "homepage" ? "/en" : `/en/work/${project.slug}`;
  const canonicalLangEs = page.name == "homepage" ? "/es" : `/es/work/${project.slug}`;

  const media = project.media as {
    url: string;
    width: number;
    height: number;
    alternativeText: string;
  };

  const keyboards = project.tech_stack
    .replaceAll("-", "")
    .split("\n")
    .map((str) => str.trim())
    .join(", ")
    .toLowerCase();

  return {
    title: project?.headline ?? seo?.title,
    description: project?.description ?? seo?.description,
    keywords: keyboards ?? seo?.keywords,
    creator: "jairo gatjens",
    publisher: "jairo gatjens",
    alternates: {
      canonical,
      languages: {
        "en-US": canonicalLangEn,
        "es-CR": canonicalLangEs,
      },
    },
    openGraph: {
      title: project?.headline,
      description: project?.description,
      locale: locale,
      images: [
        {
          url: media?.url,
          width: media?.width,
          height: media?.height,
          alt: media?.alternativeText ?? project.headline + "| image",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@jgatjens",
      creator: "@jgatjens",
      title: project?.headline ?? seo?.title,
      description: project?.description ?? seo?.description,
      images: media?.url,
    },
  };
}
