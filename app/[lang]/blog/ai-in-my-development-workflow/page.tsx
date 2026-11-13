import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { i18n, type Locale } from "@/i18n-config";
import { aiWorkflowPath, aiWorkflowPost } from "@/utils/ai-workflow-post";
import cover from "@/public/assets/img/blog/ai-workspace.jpg";

type BlogPageProps = { params: { lang: Locale } };

function getPost(lang: Locale) {
  if (!i18n.locales.includes(lang)) notFound();
  return aiWorkflowPost[lang];
}

export function generateMetadata({ params: { lang } }: BlogPageProps): Metadata {
  const post = getPost(lang);

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: "Jairo Gätjens" }],
    alternates: {
      canonical: `/${lang}${aiWorkflowPath}`,
      languages: { en: `/en${aiWorkflowPath}`, es: `/es${aiWorkflowPath}` },
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      locale: lang === "en" ? "en_US" : "es_CR",
    },
  };
}

export default function BlogPage({ params: { lang } }: BlogPageProps) {
  const post = getPost(lang);

  return (
    <article className="mx-auto max-w-5xl px-6 pb-20 pt-28 md:px-0 md:pb-24 md:pt-36">
      <header>
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-purple">
          Blog
        </p>
        <h1 className="max-w-[22ch] text-4xl font-bold leading-tight tracking-tight text-black md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-sm text-gray-600">Jairo Gätjens</p>
        <p className="mt-6 text-lg leading-relaxed text-gray-700">{post.intro}</p>
      </header>

      <Image
        src={cover}
        alt={post.imageAlt}
        sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1023px) 100vw, 1024px"
        className="mt-8 h-auto w-full rounded-lg"
        placeholder="blur"
      />

      {post.projects.map(({ title, paragraphs, link }) => (
        <section key={title} className="mt-8 border-t border-gray-200 pt-7">
          <h2 className="mb-3 text-2xl font-semibold text-black">{title}</h2>
          <div className="space-y-3 leading-relaxed text-gray-700">
            {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          {link && (
            <Link
              href={link.href}
              className="mt-3 inline-block text-sm font-semibold text-purple underline underline-offset-4"
            >
              {link.label} <span aria-hidden="true">↗</span>
            </Link>
          )}
        </section>
      ))}
    </article>
  );
}
