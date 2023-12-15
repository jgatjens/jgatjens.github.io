import Image from "next/image";
import { ShareLinks } from "@/components/share-links/share-links";

interface ProfileProps {
  image?: {
    url: string;
    width: number;
    height: number;
  };
  headline: string;
  location: string;
  description: string;
  button: {
    label: string;
    link: string;
  };
}

export const Profile = ({
  image = {
    url: "/assets/img/profile.jpg",
    width: 144,
    height: 144,
  },
  headline,
  location,
  description,
  button,
}: ProfileProps) => (
  <div className="text-center max-w-[265px] p-5 rounded-md bg-white/70">
    <div className="w-36 h-36 m-auto">
      <Image src={image.url} width={image.width} height={image.height} alt="Jairo Gatjens" />
    </div>
    <h1 className="text-h1 font-semibold mb-6 dark:text-white">
      {headline}
      <small className="text-bodysmall font-normal block pt-2">{location}</small>
    </h1>
    <a target="_blank" href={button.link} className="btn-primary w-full block">
      {button.label}
    </a>
    <p className="text-bodysmall mt-6 dark:text-white">{description}</p>
    <div className="mt-6">
      <ShareLinks />
    </div>
  </div>
);
