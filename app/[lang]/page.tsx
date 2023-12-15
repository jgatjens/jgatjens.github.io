import { getData } from "@/api/get-data";
import { Stars3D } from "@/components/3d/starts";
import { Profile } from "@/components/profile/profile";
import { Suspense } from "react";

export default async function Home({ params }: { params: { lang: string } }) {
  const populate = `homepage?populate[0]=profile.media&populate[1]=hire_me`;
  const res = await getData(populate, params.lang);
  const profile = res.data?.attributes?.profile;
  const hireMe = res.data?.attributes?.hire_me;
  const media = profile.media?.data.attributes;

  // console.log(profile);

  return (
    <div className="flex items-center justify-center h-full ">
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
    </div>
  );
}
