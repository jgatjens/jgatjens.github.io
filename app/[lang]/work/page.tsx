import { getData } from "@/api/get-data";
import { ProjectItem } from "@/components/project-item/project-item";

export default async function Work({ params }: { params: { lang: string } }) {
  const populate = `work?populate=items`;
  const res = await getData(populate, params.lang);
  const data = res.data?.attributes;

  return (
    <div className="flex items-center justify-center h-full flex-col ">
      <h1 className="text-h1 mb-10 text-gray text-center">{data.headline}</h1>
      <div className="px-5 lg:px-0">
        <ProjectItem items={data.items} />
      </div>
    </div>
  );
}
