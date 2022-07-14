import { Router } from "next/router";
import Script from "next/script";

import { Profile, Layout, Meta } from "@/components";
import { getData } from "@/db/index";

import { startAnimation } from "../public/js/animation.js";

Router.events.on("routeChangeComplete", (path) => {
  if (path == "/") {
    startAnimation();
  }
});

export default function Home({ data, nav, locale }) {
  return (
    <Layout nav={nav} locale={locale}>
      <Meta data={data.Seo} />

      <div id="css--particles"></div>
      <div className="flex items-center justify-center h-full border-b-bluedark border-b-4">
        <Profile
          title={data.profile.title}
          description={data.profile.description}
          location={data.profile.location}
          image={data.profile.image[0] || "/assets/img/profile.jpg"}
          button={{ label: data.hire_me.text, link: data.hire_me.url }}
        />
      </div>

      <Script
        src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
        onLoad={() => {
          startAnimation();
        }}
      />
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const data = await getData("homepage", locale);
  const nav = await getData("navigation", locale);
  return {
    props: { data, nav, locale }, // will be passed to the page component as props
  };
}
