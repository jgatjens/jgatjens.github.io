import type { Metadata } from 'next'
import type { Locale } from '@/i18n-config';
import { Suspense } from 'react';
import { getData } from "@/http/get-data";
import { metadata } from '@/utils/metadata';
import { Stars3D } from "@/components/3d/starts";
import { Profile } from "@/components/profile/profile";

const page = {
  name: 'homepage',
  populate: '?populate[0]=profile.media&populate[1]=hire_me&populate[2]=open_graph.media'
}

export default async function Home({ params }: { params: { lang: Locale } }) {
  const res = await getData(page, params.lang);
 
  const profile = res.data?.attributes?.profile;
  const hireMe = res.data?.attributes?.hire_me;
  const media = profile.media?.data.attributes;

  return (
    <section className="flex items-center justify-center h-full ">
      <Suspense>
        <Stars3D />
      </Suspense>

      <Profile
        headline={profile.headline}
        location={profile.location}
        description={profile.description}
        image={media}
        button={{ label: hireMe.text, link: hireMe.url }}
      />
    </section>
  );
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  return metadata({ params, page });
}