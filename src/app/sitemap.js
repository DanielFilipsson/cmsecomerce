export default async function sitemap() {
  try {
    const pages = await StoryblokCMS.getStaticPaths();
    console.log("Fetched pages for sitemap:", pages);

    if (pages.length === 0) {
      console.error("No pages fetched for sitemap.");
      return [];
    }

    // Generera sitemap-urls baserat på de sidor som hämtas
    const urls = pages.map((page) => ({
      loc: `https://cmsecomerce.vercel.app/${page.slug.join("/")}`,
      lastmod: new Date().toISOString(),
    }));

    return urls.map((url) => ({
      url: url.loc,
      lastmod: url.lastmod,
    }));
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return [];
  }
}



