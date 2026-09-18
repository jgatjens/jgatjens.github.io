import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { IconFatArrow } from "@/components/icons";
import { WorkItemProps } from "@/utils/types";
import "./style.css";

interface ItemsProps {
  items: string[];
  color?: string;
}

const List = ({ items, color }: ItemsProps) => (
  <div className="flex flex-wrap gap-y-2 gap-x-1 mb-6">
    {items.map((str, i) => {
      if (str.length === 0) {
        return;
      }
      return (
        <span
          key={i}
          className="tech-badge text-white text-[10px] font-medium px-3 py-1 rounded border transition-colors"
          style={{ "--tech-color": color || "#4CAF50" } as React.CSSProperties}
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
  color,
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
  <div className="m-auto my-16  lg:max-w-xl lg:my-12 xl:max-w-4xl" role="alert">
    <h1 className="text-h1 lg:font-semibold bg-white lg:text-h1text-bluedark mb-4 flex items-center justify-between">
      {headline}

      <div className="flex items-center gap-2">
        {url_prev_work && (
          <Link
            href={`/${lang}/work/${url_prev_work}`}
            className="nav-arrow p-2 rounded-md rotate-180 transition-colors"
            style={{ "--nav-color": color || "#4CAF50" } as React.CSSProperties}
            title="Previous project"
          >
            <IconFatArrow />
          </Link>
        )}
        {url_next_work && (
          <Link
            href={`/${lang}/work/${url_next_work}`}
            className="nav-arrow p-2 rounded-md transition-colors"
            style={{ "--nav-color": color || "#4CAF50" } as React.CSSProperties}
            title="Next project"
          >
            <IconFatArrow />
          </Link>
        )}
      </div>
    </h1>


    {/* Overview Section */}
    {t_overview && (
      <>
        <h2 className="text-h2 uppercase font-semibold mb-2">{t_overview}</h2>
        <div className="text-bodysmall mb-6 leading-normal prose prose-sm max-w-none">
          <ReactMarkdown components={{ p: ({ node, ...props }) => <p className="mb-2" {...props} /> }}>{overview}</ReactMarkdown>
        </div>
      </>
    )}

    <div className="font-bold block relative overflow-hidden rounded-md">
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

    <div className="text-gray/100 text-right italic text-xs mb-3 relative top-4">
      {new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </div>

    {/* Tech Stack Section */}
    {t_tech_title && (
      <>
        <h2 className="text-h2 uppercase font-semibold mb-2">{t_tech_title}</h2>
        <List items={tech_stack.split("-")} color={color}></List>
      </>
    )}

    {/* My Role Section */}
    {my_role && (
      <>
        <h2 className="text-h2 uppercase font-semibold mb-2">{t_my_role}</h2>
        <div className="text-bodysmall mb-6 leading-normal prose prose-sm max-w-none">
          <ReactMarkdown components={{ p: ({ node, ...props }) => <p className="mb-2" {...props} /> }}>{my_role}</ReactMarkdown>
        </div>
      </>
    )}

    {/* Key Points Section */}
    {key_points && (
      <>
        <h2 className="text-h2 uppercase font-semibold mb-2">{t_key_points}</h2>
        <div className="text-bodysmall mb-6 leading-normal prose prose-sm max-w-none">
          <ReactMarkdown components={{ p: ({ node, ...props }) => <p className="mb-2" {...props} /> }}>{key_points}</ReactMarkdown>
        </div>
      </>
    )}

    {url && (
      <a
        target="_blank"
        href={url}
        style={{ "--link-color": color || "#3178c6" } as React.CSSProperties}
      >
        <div className="btn-primary px-1 block work-item-link">
          {t_button_label || "SEE PROJECT"}
        </div>
      </a>
    )}
  </div>
);
