import Image from "next/image";
import { Navigation } from "../Navigation/Navigation";

export function Layout({ nav, locale, color, children }) {
  return (
    <>
      <div className="absolute top-0 w-full z-10">
        <Navigation
          resumeTitle={nav.resume}
          workTitle={nav.work}
          color={color}
          locale={locale}
        />
      </div>

      <main className="w-full h-full">{children}</main>

      {/* bars */}
      <div className="fixed hidden top-1/2 -left-2 -mt-3 md:block">
        <div className="h-[4px] block bg-bluedark rounded-md w-16 mb-1"></div>
        <div className="h-[4px] block bg-bluedark rounded-md w-24 mb-1"></div>
        <div className="h-[4px] block bg-bluedark rounded-md w-10"></div>
      </div>

      {/* background image */}
      <div className="fixed bottom-0 left-0 -z-10">
        <Image
          src="/assets/img/bg-website.jpg"
          alt="background home image"
          width="1052px"
          height="624px"
        />
      </div>
    </>
  );
}
