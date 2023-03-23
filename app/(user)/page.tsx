import { previewData } from "next/headers";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import PreviewHero from "../../components/preview/PreviewHero";
import PreviewNavbar from "../../components/preview/PreviewNavbar";
import PreviewTech from "../../components/preview/PreviewTech";
import PreviewSuspense from "../../components/preview/PreviewSuspense";
import Tech from "../../components/Tech";
import {
  logoQuery,
  linksQuery,
  heroQuery,
  techQuery,
  projectsQuery,
  servicesQuery,
} from "../../lib/queries";
import { client } from "../../lib/sanity.client";
import Projects from "../../components/Projects";
import PreviewProjects from "../../components/preview/PreviewProjects";
import Services from "../../components/Services";
import PreviewServices from "../../components/preview/PreviewServices";
import Footer from "../../components/Footer";

export const revalidate = 60;

export default async function Page() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#ff7f01]">
              Loading preview...
            </p>
          </div>
        }
      >
        <main>
          <div className="max-w-7xl mx-auto pt-5 px-5">
            <PreviewNavbar logo={logoQuery} links={linksQuery} />
            <PreviewHero heroQuery={heroQuery} />
          </div>
          <PreviewTech techQuery={techQuery} />
          <PreviewProjects projectsQuery={projectsQuery} />
          <PreviewServices servicesQuery={servicesQuery} />
          <Footer />
        </main>
      </PreviewSuspense>
    );
  }

  const logoData = await client.fetch(logoQuery);
  const linksData = await client.fetch(linksQuery);
  const heroData = await client.fetch(heroQuery);
  const techData = await client.fetch(techQuery);
  const projectsData = await client.fetch(projectsQuery);
  const servicesData = await client.fetch(servicesQuery);
  return (
    <main>
      <div className="max-w-7xl mx-auto pt-5 px-5">
        <Navbar logo={logoData} links={linksData} />
        <Hero heroData={heroData} />
      </div>
      <Tech techData={techData} />
      <Projects projectsData={projectsData} />
      <Services servicesData={servicesData} />
      <Footer />
    </main>
  );
}
