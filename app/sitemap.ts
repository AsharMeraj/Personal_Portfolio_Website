import type { MetadataRoute } from "next";
import { PROJECT } from "./_utils/Constant";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://muhammadashar.vercel.app";

  const pages = ["", "/work", "/contact"].map((path) => ({
    url: base + path,
    lastModified: new Date(),
  }));

  const projects = PROJECT.map((p) => ({
    url: `${base}/work/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...pages, ...projects];
}