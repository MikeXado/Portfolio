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
          className="text-gray-700 hover:text-blue-600 font-medium rounded-lg text-sm p-2"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-7 h-7"
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
          "fixed top-0 z-50 h-screen p-6 overflow-y-auto transition-all duration-300 bg-white/95 backdrop-blur-xl w-80" +
          (isOpen ? " left-0 shadow-2xl" : " -left-full")
        }
      >
        <div className="flex items-center justify-between mb-8">
          <h5 className="text-xl font-bold">
            <span className="text-gray-900">Menu</span>
          </h5>
          <button
            onClick={handleClose}
            type="button"
            className="text-gray-500 hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-sm p-2 transition-all duration-300"
          >
            <svg
              aria-hidden="true"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
        </div>

        <div className="py-4 overflow-y-auto">
          <ul className="space-y-3">
            {linksData?.map((link) => {
              return (
                <li key={link._id}>
                  <a
                    onClick={handleClose}
                    href={link.href}
                    className="flex items-center p-4 text-base font-semibold text-gray-700 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-300 border border-transparent hover:border-blue-200"
                  >
                    <span className="flex-1">
                      {link.title}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <Link
          href="/contact"
          onClick={handleClose}
          className="mt-8 w-full text-center block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-base px-6 py-4 rounded-xl shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
        >
          Contact Me
        </Link>
      </div>

      {isOpen && (
        <div
          onClick={handleClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
        ></div>
      )}
    </div>
  );
}
