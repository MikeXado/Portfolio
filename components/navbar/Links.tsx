import Link from "next/link";
import React from "react";
import { LinkType } from "../../typings";

function Links({ links }: { links: LinkType[] }) {
  const reversedLinks = links.reverse();
  return (
    <ul className="text-white items-center md:space-x-20  space-x-10 md:flex hidden">
      {reversedLinks?.map((link) => {
        return (
          <li
            className="text-white font-semibold text-lg hover:underline transition-all"
            key={link._id}
          >
            <a href={link.href}>{link.title}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default Links;
