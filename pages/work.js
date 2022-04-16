import Link from "next/link";
import { getData } from "../db/index";
import { ProjectItem } from "src/ProjectItem/ProjectItem";
import Meta from "./components/Meta";
import { IconArrow } from "../src/Icons/Icons";
// import Image from "next/image";

export default function Work({ data }) {
  console.log(data.items);
  return (
    <>
      <Meta data={data.seo} />
      <div className="flex flex-col items-center justify-center h-full">
        {/* bars */}
        <div className="absolute top-1/2 -left-2 -mt-3">
          <div className="h-[4px] block bg-blue rounded-md w-16 mb-1"></div>
          <div className="h-[4px] block bg-blue rounded-md w-24 mb-1"></div>
          <div className="h-[4px] block bg-blue rounded-md w-10"></div>
        </div>

        <Link href="/">
          <a>
            <IconArrow className="text-blue mb-5 hover:text-bluedark print:hidden" />
          </a>
        </Link>

        <h1 className="text-h1 mb-10 font-bold text-blue">Work</h1>
        <ProjectItem items={data.items} />

        {/* background image */}
        <div className="absolute bottom-0 left-0 -z-10">
          <img src="/assets/img/bg-website.jpg" alt="background home image" />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await getData("projects");
  return {
    props: { data }, // will be passed to the page component as props
  };
}
