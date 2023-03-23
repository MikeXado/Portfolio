"use client";

import Link from "next/link";
import React, { useState } from "react";
import { LinkType } from "../../typings";

export default function MobileNavbar({ linksData }: { linksData: LinkType[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="md:hidden">
      <div className="text-center">
        <button
          onClick={handleOpen}
          className="text-white  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 "
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      <div
        className={
          "fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 dark:bg-[#252525]" +
          (isOpen ? " translate-x-0" : " -translate-x-full")
        }
      >
        <h5 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
          Menu
        </h5>
        <button
          onClick={handleClose}
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-[#e48521] dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2">
            {linksData?.map((link) => {
              return (
                <li key={link._id}>
                  <a
                    onClick={handleClose}
                    href={link.href}
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#e48521]"
                  >
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      {link.title}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <Link
          href="/contact"
          className="border text-white mt-10 text-center block text-semibold text-lg px-5 rounded-2xl transition-all hover:bg-[#e48521] py-2 border-white"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
