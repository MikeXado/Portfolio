"use client";
import { usePreview } from "../../lib/sanity.preview";
import Hero from "../Hero";

type Props = {
  heroQuery: string;
};

function PreviewHero({ heroQuery }: Props) {
  const heroData = usePreview(null, heroQuery);
  return <Hero heroData={heroData} />;
}

export default PreviewHero;
