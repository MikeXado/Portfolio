import Link from "next/link";
import React from "react";

function Logo({ logo }: { logo: string }) {
  const com = logo.substring("gurin-dev".length);
  const name = logo.substring(0, 9);

  return (
    <Link href="/" className="text-2xl font-extrabold hover:scale-105 transition-transform duration-300">
      <span className="text-gray-900">{name}</span>
      <span className="gradient-text">{com}</span>
    </Link>
  );
}

export default Logo;
