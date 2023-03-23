import React from "react";
import { LinkType, LogoType } from "../typings";
import ContactButton from "./navbar/ContactButton";
import Links from "./navbar/Links";
import Logo from "./navbar/Logo";
import MobileNavbar from "./navbar/MobileNavbar";

function Navbar({ logo, links }: { logo: LogoType[]; links: LinkType[] }) {
  return (
    <>
      <header className="justify-between items-center w-full flex ">
        <Logo logo={logo[0].logo} />
        <Links links={links} />
        <ContactButton />
        <MobileNavbar linksData={links} />
      </header>
    </>
  );
}

export default Navbar;
