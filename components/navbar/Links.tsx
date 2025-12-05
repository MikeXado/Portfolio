import Link from "next/link";
import React from "react";
import { LinkType } from "../../typings";

function Links({ links }: { links: LinkType[] }) {
  const reversedLinks = links.reverse();
  return (
    <ul className="items-center md:space-x-8 md:flex hidden">
      {reversedLinks?.map((link) => {
        return (
          <li key={link._id}>
            <a
              href={link.href}
              className="relative text-gray-700 font-semibold text-base hover:text-blue-600 transition-all group"
            >
              {link.title}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Links;
