import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://ramtinrahmati.com/", changeFrequency: "monthly", priority: 1 },
    { url: "https://ramtinrahmati.com/work/", changeFrequency: "monthly", priority: 0.7 },
  ];
}
