import { MetadataRoute } from "next";

const BLOG_POSTS = [
    {
        id: "18kt-vs-21kt-vs-22kt-gold-uae",
        date: new Date("2026-04-01")
    },
    {
        id: "ultimate-guide-buying-bridal-jewellery-abu-dhabi",
        date: new Date("2026-04-01")
    },
    {
        id: "how-to-care-for-diamond-jewellery-humid-uae",
        date: new Date("2026-05-01")
    },
    {
        id: "understanding-gold-making-charges-madama",
        date: new Date("2026-05-01")
    }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alsiraj-jewellery.com";

  const staticRoutes = [
    "",
    "/diamond-jewellery",
    "/gold-jewellery",
    "/bridal-jewellery",
    "/blog",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const dynamicBlogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: post.date,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...dynamicBlogRoutes];
}
