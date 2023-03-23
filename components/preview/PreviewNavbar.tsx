"use client";
import { usePreview } from "../../lib/sanity.preview";
import Navbar from "../Navbar";

type Props = {
  logo: string;
  links: string;
};

function PreviewNavbar({ logo, links }: Props) {
  const logoData = usePreview(null, logo);
  const linksData = usePreview(null, links);
  return <Navbar logo={logoData} links={linksData} />;
}

export default PreviewNavbar;
