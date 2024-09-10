import { StoryBlokUtils } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";


storyblokInit({
  accessToken: "DIN_ACCESS_TOKEN_HÄR", //Lägg in TOKEN när den är klar!
  use: [apiPlugin],
});

export default async function sitemap() {
  try {
    const pages = (await StoryBlokUtils.getStaticPaths()).filter(
      (path) => path?.slug?.[0] !== "config" 
    );

    const sitemap = pages.map((page) => {
      const slug = page?.slug.filter((item) => item !== ""); 
      let finalSlug = slug?.length > 0 ? slug.join("/") : ""; 

      const url = `https://www.example.com/${finalSlug}`; //skriv in webbplats efter deploy
      return {
        url: url,
        lastModified: new Date(),
        priority: 1, 
      };
    });

    return sitemap;
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return [];
  }
}



