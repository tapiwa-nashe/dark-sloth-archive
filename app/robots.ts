import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/creator/"],
    },
    sitemap: "https://darkslotharchive.com/sitemap.xml",
  };
}
