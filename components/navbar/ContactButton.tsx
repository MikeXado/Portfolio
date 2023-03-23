import Link from "next/link";
import React from "react";

function ContactButton() {
  return (
    <Link
      href="/contact"
      className="border text-white md:block hidden text-semibold text-lg px-5 rounded-2xl transition-all hover:bg-[#e48521] py-2 border-white"
    >
      Contact
    </Link>
  );
}

export default ContactButton;
