"use client";
import { usePreview } from "../../lib/sanity.preview";
import Tech from "../Tech";

type Props = {
  techQuery: string;
};

function PreviewTech({ techQuery }: Props) {
  const techData = usePreview(null, techQuery);
  return <Tech techData={techData} />;
}

export default PreviewTech;
