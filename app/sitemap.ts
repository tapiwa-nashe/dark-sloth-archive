import type { MetadataRoute } from "next";
import { records } from "@/lib/records";
import { collections } from "@/lib/collections";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://darkslotharchive.com";
  const staticRoutes = [
    "",
    "/collections",
    "/records",
    "/books",
    "/developmental-pdfs",
    "/recoveries",
    "/entities",
    "/first-recovery",
    "/identity",
    "/dossier",
    "/dossiers",
    "/dossiers/observer",
    "/platform",
    "/studios",
    "/studios/publishing",
    "/partnerships",
    "/contribute",
  ];
  const collectionRoutes = collections.map((collection) => collection.href);
  const recordRoutes = records.map((record) => `/records/${record.id}`);
  const uniqueRoutes = Array.from(new Set([...staticRoutes, ...collectionRoutes, ...recordRoutes]));

  return uniqueRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/records" || route === "/collections" || route === "/books" ? 0.8 : 0.6,
  }));
}
