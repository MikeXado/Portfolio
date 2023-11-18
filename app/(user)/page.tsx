import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
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
import Services from "../../components/Services";
import Footer from "../../components/Footer";

export const revalidate = 60;

export default async function Page() {
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
