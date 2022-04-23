import Layout from "./components/Layout";
import Meta from "./components/Meta";
import { Profile } from "@/components/Profile/Profile";
import { getData } from "@/db/index";

export default function Home({ data, nav, locale }) {
  return (
    <Layout nav={nav} locale={locale}>
      <Meta data={data.Seo} />

      <div className="flex items-center justify-center h-full">
        <Profile
          title={data.profile.title}
          description={data.profile.description}
          location={data.profile.location}
          image={data.profile.image[0] || "/assets/img/profile.jpg"}
          button={{ label: data.hire_me.text, link: data.hire_me.url }}
        />
      </div>
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
