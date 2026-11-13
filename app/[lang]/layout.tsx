import "@/globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Locale, i18n } from "@/i18n-config";
import { getDictionary } from "@/get-diccionary";
import { GoogleTagManager } from "@next/third-parties/google";

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
      <body className="flex min-h-screen flex-col">
        <>
          <header className="fixed top-0 w-full z-40 border-b border-white/10">
            <Navigation lang={params.lang} t={t} />
          </header>

          <main className="w-full flex-1">{children}</main>

          <Footer lang={params.lang} t={t} />
        </>
      </body>
      <GoogleTagManager gtmId="GTM-PJ8T44" />
    </html>
  );
}
