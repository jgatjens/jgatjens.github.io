import { cache } from "react";
import { getDataProps } from "@/utils/types";

// import db from "./db";
const strapi_url = process.env.API_URL || "http://localhost:1337/api";


const getDataFn = async (populate: string, locale: string) => {
  const languaje = locale ? `&locale=${locale}` : "";
  const url = `${strapi_url}/${populate}${languaje}`;

  console.log("Fetching data from: ", url);

  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log("Fetch connection error, returning local data");
    // return db[section];
  }
};

export const getData = cache(async (page: getDataProps, locale: string) => {    
  const url = `${page.name}/${page.populate}`;
  return await getDataFn(url, locale);
});
