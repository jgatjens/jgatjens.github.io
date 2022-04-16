import db from "./db";
const strapi_url = "http://localhost:3007/";

export const getData = async (section, locale) => {
  const languaje = locale ? `?_locale=${locale}` : "";
  const url = `${strapi_url}${section}${languaje}`;
  let res;

  try {
    res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log("Fetch connection error, returning local data");
    return await db[section];
  }
};
