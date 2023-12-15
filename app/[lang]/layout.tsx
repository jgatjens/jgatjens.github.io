import "@/globals.css";
import type { Metadata } from "next";
import Image from "next/image";
// import Script from "next/script";
import { Poppins } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Locale, i18n } from "@/i18n-config";
import { getDictionary } from "@/get-diccionary";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const t = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <body className={poppins.className}>
        <>
          <div className="absolute top-0 w-full z-10">
            <Navigation lang={params.lang} t={t} />
          </div>

          <main className="w-full h-full">{children}</main>

          {/* bars */}
          <div className="fixed hidden top-1/2 -left-2 -mt-3 md:block">
            <div className="h-[4px] block bg-bluedark rounded-md w-16 mb-1"></div>
            <div className="h-[4px] block bg-bluedark rounded-md w-24 mb-1"></div>
            <div className="h-[4px] block bg-bluedark rounded-md w-10"></div>
          </div>

          {/* background image */}
          <div className="fixed bottom-0 left-0 -z-10 print:hidden">
            <Image
              src="/assets/img/bg-website.jpg"
              alt="background home image"
              width={1052}
              height={624}
            />
          </div>

          {/* <Script strategy="afterInteractive" src="/js/gtm.js" /> */}
        </>
      </body>
    </html>
  );
}

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };