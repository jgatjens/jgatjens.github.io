import type { Metadata } from "next";
import type { Locale } from "@/i18n-config";
import { Suspense } from "react";
import { getData } from "@/http/get-data";
import { metadata } from "@/utils/metadata";
import { Stars3D } from "@/components/3d/starts";
import { Profile } from "@/components/profile/profile";
import { BackendProps } from "@/utils/types";

const page = {
  name: "homepage",
  populate:
    "?populate[0]=profile.media&populate[1]=hire_me&populate[2]=open_graph.media",
};

type ProfileProps = {
  headline: string;
  location: string;
  description: string;
  media: BackendProps;
};

type MediaProps = {
  url: string;
  width: number;
  height: number;
  alternativeText: string;
};

type HireMeProps = {
  text: string;
  url: string;
};

export default async function Page({ params }: { params: { lang: Locale } }) {
  const res = await getData(page, params.lang);

  const profile = res.data?.attributes?.profile as ProfileProps;
  const hireMe = res.data?.attributes?.hire_me as HireMeProps;
  const media = profile.media?.data.attributes as MediaProps;

  return (
    <section className="flex items-center justify-center h-full">
      <Suspense>
        <Stars3D />
      </Suspense>

      {profile && (
        <Profile
          headline={profile.headline}
          location={profile.location}
          description={profile.description}
          image={media}
          button={{ label: hireMe.text, link: hireMe.url }}
        />
      )}
    </section>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  // console.log("metadata homepage", params.lang);
  return metadata({ params, page });
}
