import Link from "next/link";
import React from "react";

function ContactButton() {
  return (
    <Link
      href="/contact"
      className="md:block hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-base px-6 py-2.5 rounded-xl shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
    >
      Contact
    </Link>
  );
}

export default ContactButton;
