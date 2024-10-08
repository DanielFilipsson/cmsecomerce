"use client";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "@/components/content-types/Page";

import Teaser from "@/components/nestable/Teaser";
import RichTextDefault from "@/components/nestable/RichText";
import Header from "@/components/nestable/Header";
import Footer from "@/components/nestable/Footer";
import Latest from "@/components/nestable/Latest";
import AboutUs from "@/components/content-types/AboutUs";
import ProductList from "@/components/content-types/products"
import ProductDetails from "@/components//nestable/Details"
import Hero from "@/components/nestable/Hero";
import Divider from "@/components/nestable/Divider";

const components = {
  "page": Page,
  "teaser":Teaser,
  "richtext": RichTextDefault,
  "header": Header,
  "footer": Footer,
  "latest": Latest,
  "hero": Hero,
  "aboutUs": AboutUs,
  "productList": ProductList,
  "product": ProductDetails,
  "divider": Divider
  
}

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,

  use: [apiPlugin],
  components
});

export default function StoryblokProvider({ children }) {
  return (
    children
  );
}