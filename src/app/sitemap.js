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
    return sitemap;
  } catch (error) {
    console.error(error);
    return[];
  }
}





// import { StoryblokCMS } from "@/utils/cms"; 

// export default async function sitemap() {
//   try {
//     const pages = await StoryblokCMS.getStaticPaths();

//     const sitemap = pages.map((page) => ({
//       url: `https://cmsecomerce.vercel.app/${page.slug.join("/")}`,
//       lastModified: new Date(),
//       changeFrequency: 'weekly',  
//       priority: 0.8, 
//     }));

//     sitemap.push(
//       {
//         url: 'https://cmsecomerce.vercel.app',
//         lastModified: new Date(),
//         changeFrequency: 'yearly',
//         priority: 1,
//       },
//       {
//         url: 'https://cmsecomerce.vercel.app/productliststory',
//         lastModified: new Date(),
//         changeFrequency: 'monthly',
//         priority: 0.8,
//       },
//       {
//         url: 'https://cmsecomerce.vercel.app/aboutus',
//         lastModified: new Date(),
//         changeFrequency: 'monthly',
//         priority: 0.8,
//       }
//     );

//     return sitemap;
//   } catch (error) {
//     console.error("Error generating sitemap:", error);
//     return [];
//   }
// }