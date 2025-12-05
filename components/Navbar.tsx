import React from "react";
import { LinkType, LogoType } from "../typings";
import ContactButton from "./navbar/ContactButton";
import Links from "./navbar/Links";
import Logo from "./navbar/Logo";
import MobileNavbar from "./navbar/MobileNavbar";

function Navbar({ logo, links }: { logo: LogoType[]; links: LinkType[] }) {
  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-50 fade-in">
        <div className="max-w-7xl mx-auto px-5 py-3">
          <div className="glass rounded-2xl px-6 py-4 flex justify-between items-center shadow-elegant transition-all duration-300 hover:shadow-glow">
            <Logo logo={logo[0].logo} />
            <Links links={links} />
            <ContactButton />
            <MobileNavbar linksData={links} />
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
