import Link from "next/link";
// import Image from "next/image";
import { Navigation } from "../src/Navigation/Navigation";
import { Profile } from "../src/Profile/Profile";
import Meta from "./components/Meta";

export default function Home({ data }) {
  return (
    <>
      <Meta data={data.Seo} />
      <div className="flex items-center justify-center h-full">
        <div className="absolute top-0 w-full">
          <Navigation
            Link={Link}
            resumeTitle={data.resume}
            workTitle={data.work}
          />
        </div>
        <Profile
          {...data.profile}
          button={{ label: data.hire_me.text, link: data.hire_me.url }}
        />

        {/* bars */}
        <div className="absolute top-1/2 -left-2 -mt-3">
          <div className="h-[4px] block bg-bluedark rounded-md w-16 mb-1"></div>
          <div className="h-[4px] block bg-bluedark rounded-md w-24 mb-1"></div>
          <div className="h-[4px] block bg-bluedark rounded-md w-10"></div>
        </div>

        {/* background image */}
        <div className="absolute bottom-0 left-0 -z-10">
          <img src="/assets/img/bg-website.jpg" alt="background home image" />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const res = await fetch(`http://localhost:3007/homepage?_locale=${locale}`);
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}
