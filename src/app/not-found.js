// export default function NotFound() {
//     //Fetch the 404 page from storyblok (this component works as server component aswell)
//     //update this component to render a 404 page
//     return <h1>404 notfound</h1>
// }

import { StoryblokCMS } from "@/utils/cms";
import Link from "next/link";

export default async function NotFound() {
  const currentConfig = await StoryblokCMS.getConfig();
  console.log("404", currentConfig);
  //Fetch the 404 page from storyblok (this component works as server component aswell)
  //update this component to render a 404 page
  return (
    <div className="flex items-center justify-center min-h-screen h-[300px]">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black-600 mb-4">
          {currentConfig?.notFoundTitle || "Something went wrong"}
        </h1>
        <p className="text-lg text-gray-700">
          {currentConfig?.notFoundText ||
            "Sorry, the page you are looking for does not exist."}
        </p>
        {currentConfig?.notFoundLink && (
          <div>
            <Link
              href={currentConfig.notFoundLink.cached_url || "#"}
              title={currentConfig.notFoundLink.title || "Click here"}
              className="inline-block px-4 py-2 text-gray-800 rounded hover:text-black transition-transform transform hover:scale-105"
            >
              {currentConfig.notFoundLink.title || "Go to Home"}
            </Link>
          </div>
          //   för att deploya
        )}
      </div>
    </div>
  );
}
