export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/*",
        disallow: "/api/",
      },
    ],
    sitemap: "https://cmsecomerce.vercel.app/sitemap.xml",
  };
}