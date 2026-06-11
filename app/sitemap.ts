import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://darkslotharchive.com";

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/collections`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/dossiers`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/recoveries`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/books`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/platform`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/identity`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/studios`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/helmr-hugr`,
      lastModified: new Date(),
    },
  ];
}
