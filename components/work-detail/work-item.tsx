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
          className="bg-bluedark text-white text-xs font-medium px-3 py-1 rounded border hover:border-red-700 hover:bg-red transition-colors"
        >
          {str}
        </span>
      );
    })}
  </div>
);

export const WorkItem = ({
  headline,
  description,
  date,
  media,
  url,
  tech_stack,
  url_next_work,
  url_prev_work,
  t_button_label,
  t_tech_title,
  t_tech_description,
  lang,
}: WorkItemProps) => (
  <div className="max-w-xl m-auto my-16 lg:my-10" role="alert">
    <h1 className="text-h2 lg:font-semibold bg-white lg:text-h1text-bluedark mb-8 flex items-center justify-between">
      {headline}

      <div className="flex items-center">
        {url_prev_work && (
          <Link
            href={`/${lang}/work/${url_prev_work}`}
            className="rotate-180 mr-3 hover:text-red"
          >
            <IconFatArrow />
          </Link>
        )}
        {url_next_work && (
          <Link
            href={`/${lang}/work/${url_next_work}`}
            className="hover:text-red"
          >
            <IconFatArrow />
          </Link>
        )}
      </div>
    </h1>

    <div className="mb-4 font-bold block relative">
      {media && (
        <Image
          src={media.url}
          alt="work detail image"
          width="520"
          height="340"
          className="rounded-md shadow-inner shadow-lg w-full object-cover grayscale hover:grayscale-0 transition-all"
        />
      )}
    </div>

    <div className="text-gray/100 text-right text-xs mb-4">
      {new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </div>

    <h2 className="text-lg font-semibold mb-2">{t_tech_description}</h2>
    <p className="text-bodysmall mb-6">{description}</p>

    {t_tech_title && (
      <h2 className="text-h4 font-semibold text-gray mb-3">{t_tech_title}</h2>
    )}
    <List items={tech_stack.split("-")}></List>

    {url && (
      <a
        target="_blank"
        href={url}
        className="inline-block rounded-md duration-300 hover:shadow-[0_0_2rem_-0.5rem_#3178c6]"
      >
        <div className="items-center uppercase justify-center px-8 py-6 rounded-md text-sm font-normal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed text-bluedark ring-offset-dark border border-input hover:text-accent-foreground h-10 py-2 px-4 fancy-border-gradient hover:bg-background relative mx-auto flex gap-4 border-none">
          {t_button_label || "SEE PROJECT"}
        </div>
      </a>
    )}
  </div>
);
