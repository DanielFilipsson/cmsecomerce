import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";


storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_PREVIEW_STORYBLOK_TOKEN,  
  use: [apiPlugin],
});

export default async function sitemap() {
  try {
    const pages = await StoryblokCMS.getStaticPaths();

    const sitemap = pages.map((page) => {
      const currentUrl = page.slug;
      return {
        url: currentUrl,
        lastMOdified: new Date(),
        priority: 1,
      };
    });
    console.log(sitemap)
    return sitemap;
  } catch (error) {
    console.error(error);
    return[];
  }
}
