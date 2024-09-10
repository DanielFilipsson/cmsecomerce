export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/*",
        disallow: "/api/",
      },
    ],
    sitemap: `https://localhost:3010//sitemap.xml`, //skriv in webbplats efter deploy
  };
}
