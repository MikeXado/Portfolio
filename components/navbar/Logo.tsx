import Link from "next/link";
import React from "react";

function Logo({ logo }: { logo: string }) {
  const com = logo.substring("GeekifiedMike".length);
  const name = logo.substring(0, 12);

  return (
    <Link href="/" className="text-white text-lg font-extrabold">
      <span>{name}</span>
      <span className="text-[#ff7f01]">{com}</span>
    </Link>
  );
}

export default Logo;
