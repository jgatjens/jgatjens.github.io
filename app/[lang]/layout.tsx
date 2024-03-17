import "@/globals.css";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Locale, i18n } from "@/i18n-config";
import { getDictionary } from "@/get-diccionary";
import { GoogleTagManager } from "@next/third-parties/google";
import Wave from "@/components/wave";

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
            <Wave />
          </div>

          {/* background image */}
          <div className="fixed bottom-0 left-0 -z-10 print:hidden">
            <Image
              src="/assets/img/bg-website.jpg"
              alt="background home image"
              loading="lazy"
              priority={false}
              style={{ width: 626, height: 412, maxWidth: "inherit" }}
              width={626}
              height={412}
            />
          </div>
        </>
      </body>
      <GoogleTagManager gtmId="GTM-PJ8T44" />
    </html>
  );
}
