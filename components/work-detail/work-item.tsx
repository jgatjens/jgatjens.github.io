import Link from "next/link";
import Image from "next/image";
import { IconFatArrow } from "@/components/icons";
import { WorkItemProps } from "@/utils/types";

interface ItemsProps {
  items: string[];
}

const List = ({ items }: ItemsProps) => (
  <div className="flex flex-wrap gap-y-2 gap-x-1 mb-8">
    {items.map((str, i) => {
      if (str.length === 0) {
        return;
      }
      return (
        <span
          key={i}
          className="bg-bluedark text-white text-[10px] font-medium px-3 py-1 rounded border hover:border-red-700 hover:bg-red transition-colors"
        >
          {str}
        </span>
      );
    })}
  </div>
);

export const WorkItem = ({
  headline,
  overview,
  date,
  media,
  url,
  tech_stack,
  my_role,
  key_points,
  url_next_work,
  url_prev_work,
  t_button_label,
  t_tech_title,
  t_overview,
  t_my_role,
  t_key_points,
  lang,
}: WorkItemProps) => (
  <div className="m-auto my-16  lg:max-w-xl lg:my-12 xl:max-w-3xl" role="alert">
    <h1 className="text-h2 lg:font-semibold bg-white lg:text-h1text-bluedark mb-4 flex items-center justify-between">
      {headline}

      <div className="flex items-center gap-2">
        {url_prev_work && (
          <Link
            href={`/${lang}/work/${url_prev_work}`}
            className="rotate-180 p-2 rounded-md hover:text-purple hover:bg-gray-100 transition-colors"
            title="Previous project"
          >
            <IconFatArrow />
          </Link>
        )}
        {url_next_work && (
          <Link
            href={`/${lang}/work/${url_next_work}`}
            className="p-2 rounded-md hover:text-purple hover:bg-gray-100 transition-colors"
            title="Next project"
          >
            <IconFatArrow />
          </Link>
        )}
      </div>
    </h1>

    <div className="mb-4 font-bold block relative overflow-hidden rounded-md">
      {media && (
        <Image
          src={media.url}
          alt="work detail image"
          width="520"
          height="340"
          className="rounded-md w-full object-cover hover:scale-105 hover:brightness-110 shadow-lg hover:shadow-2xl transition-all duration-300"
        />
      )}
    </div>

    <div className="text-gray/100 text-right italic text-xs mb-4">
      {new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </div>

    {/* Overview Section */}
    {t_overview && (
      <>
        <h2 className="text-h4 font-semibold text-gray mb-3">{t_overview}</h2>
        <div className="text-bodysmall mb-6 whitespace-pre-wrap">
          {overview}
        </div>
      </>
    )}

    {/* Tech Stack Section */}
    {t_tech_title && (
      <>
        <h2 className="text-h4 font-semibold text-gray mb-3">{t_tech_title}</h2>
        <List items={tech_stack.split("-")}></List>
      </>
    )}

    {/* My Role Section */}
    {my_role && (
      <>
        <h2 className="text-h4 font-semibold text-gray mb-3">{t_my_role}</h2>
        <div className="text-bodysmall mb-6 whitespace-pre-wrap">
          {my_role}
        </div>
      </>
    )}

    {/* Key Points Section */}
    {key_points && (
      <>
        <h2 className="text-h4 font-semibold text-gray mb-3">{t_key_points}</h2>
        <div className="text-bodysmall mb-6 whitespace-pre-wrap">
          {key_points}
        </div>
      </>
    )}

    {url && (
      <a
        target="_blank"
        href={url}
        className="inline-block rounded-md duration-300 hover:shadow-[0_0_2rem_-0.5rem_#3178c6]"
      >
        <div className="items-center uppercase justify-center px-8 py-6 rounded-md text-sm font-normal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed text-bluedark ring-offset-dark border border-input h-10 fancy-border-gradient relative mx-auto flex gap-4 border-none hover:bg-bluedark hover:text-white">
          {t_button_label || "SEE PROJECT"}
        </div>
      </a>
    )}
  </div>
);
