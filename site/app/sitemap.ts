import type { MetadataRoute } from "next";
import { getAllExames } from "@/lib/exames";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://saolucaslabs.com.br";

  const examePages = getAllExames().map((e) => ({
    url: `${baseUrl}/exames/${e.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/exames`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    ...examePages,
    { url: `${baseUrl}/privacidade`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
