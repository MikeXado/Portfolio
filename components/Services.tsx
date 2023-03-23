import React from "react";
import { ServiceType } from "../typings";

function Services({ servicesData }: { servicesData: ServiceType[] }) {
  return (
    <section
      id="services"
      className="text-white lg:flex transition-all justify-between max-w-7xl mx-auto  mt-24 px-5"
    >
      <div>
        <h2 className="text-5xl font-bold ">Services I Offer</h2>
        <div className="flex mt-10">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          </span>
          <p className="text-md text-gray-400 max-w-[500px]">
            We help ambitious business like your generate more profits by
            building awerness , driving web trafic , connecting with customers
            and growing overall sales.
          </p>
        </div>
      </div>

      <ul className="lg:w-[500px] mt-20 lg:mt-0 max-w-full lg:ml-5">
        {servicesData?.map((service) => {
          return (
            <li
              key={service._id}
              className=" border-t-[1px] mb-24 border-white w-full"
            >
              <div className="flex pt-5">
                <div className="text-xl">{service.idx}/</div>
                <h2 className="ml-5 text-4xl font-semibold line-height-2">
                  {service.title}
                </h2>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Services;
