"use client";

import { usePreview } from "../../lib/sanity.preview";

import Services from "../Services";

type Props = {
  servicesQuery: string;
};

function PreviewServices({ servicesQuery }: Props) {
  const servicesData = usePreview(null, servicesQuery);
  return <Services servicesData={servicesData} />;
}

export default PreviewServices;
