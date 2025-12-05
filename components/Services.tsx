import React from "react";
import { ServiceType } from "../typings";

function Services({ servicesData }: { servicesData: ServiceType[] }) {
  return (
    <section
      id="services"
      className="max-w-7xl mx-auto mt-32 px-5 py-16"
    >
      <div className="lg:flex gap-16 items-start">
        <div className="lg:w-1/2 lg:sticky lg:top-24 slide-in-left">
          <div className="inline-block mb-4 zoom-in">
            <span className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-700 rounded-full text-sm font-semibold shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105">
              What I Do
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 hover:scale-105 transition-transform duration-500">
            Services I <span className="gradient-text">Offer</span>
          </h2>
          <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-soft border border-gray-100 hover:shadow-elegant hover:border-blue-200 transition-all duration-500 hover:-translate-y-1 group">
            <div className="mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-blue-600 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
              I help ambitious businesses generate more profits by building awareness,
              driving web traffic, connecting with customers, and growing overall sales through
              innovative digital solutions.
            </p>
          </div>
        </div>

        <div className="lg:w-1/2 mt-16 lg:mt-0 space-y-8">
          {servicesData?.map((service, index) => {
            return (
              <div
                key={service._id}
                className="group relative slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 hover:shadow-elegant hover:border-blue-200 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                        {service.idx}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-all duration-300 group-hover:translate-x-2">
                        {service.title}
                      </h3>
                      <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4 group-hover:w-full transition-all duration-500"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-2 -bottom-2 w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl -z-10 group-hover:right-1 group-hover:bottom-1 transition-all duration-500 group-hover:opacity-80"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
