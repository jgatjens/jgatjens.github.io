import { getData } from "@/http/get-data";
import { Metadata } from "next";
import { BackendProps, getDataProps } from "./types";

type MetadataProps = {
  params: {
    lang: string;
  };
  page: getDataProps;
}

export async function metadata({ params, page }: MetadataProps): Promise<Metadata> {
  // read route params
  const locale = params.lang || "en";
  const res: BackendProps = await getData(page, locale);
  const seo = res.data.attributes?.open_graph;

  const canonical = page.name == 'homepage' ? '/' : `/${page.name}`;
  const canonicalLangEn = page.name == 'homepage' ? '/en' : `/en/${page.name}`;
  const canonicalLangEs = page.name == 'homepage' ? '/es' : `/es/${page.name}`;

  const media = seo?.media?.data?.attributes as {
    url: string;
    width: number;
    height: number;
    alternativeText: string;
  };
  
  return {
    title: seo?.title,
    description: seo?.description,
    keywords: seo?.keywords,
    creator: 'Jairo Gatjens',
    publisher: 'Jairo Gatjens',
    alternates: {
      canonical,
      languages: {
        'en-US': canonicalLangEn,
        'es-CR': canonicalLangEs,
      },
    },
    openGraph: {
      title: seo?.title,
      description: seo?.description,
      locale: locale,
      images: [
        {
          url: media.url,
          width: media.width,
          height: media.height,
          alt: media.alternativeText,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@jgatjens',
      creator: '@jgatjens',
      title: seo?.title,
      description: seo?.description,
      images: media.url,
    },
  }
}