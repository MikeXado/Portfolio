import Image from "next/image";
import Link from "next/link";
import React from "react";
import urlFor from "../lib/urlFor";
import { ProjectType } from "../typings";

function Project({ project }: { project: ProjectType }) {
  return (
    // <div className="flex">
    //   <Image
    //     width={500}
    //     height={500}
    //     src={urlFor(project.img).url()}
    //     alt={project.title}
    //   />
    //   <div className="ml-20">
    //     <p className="text-white text-xl font-semibold">{project.title}</p>
    //     <p className="text-gray-400 text-lg mt-5">{project.description}</p>
    //   </div>
    // </div>

    <div className="relative md:max-w-lg group mx-auto max-w-lg px-2 py-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-[#121212]  dark:border-[#121212] ">
      <div className="">
        <Image
          width={500}
          height={500}
          src={urlFor(project.img).url()}
          alt={project.title}
          className=""
        />
        <div className="p-5">
          <div className="flex items-center">
            <p className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {project.title}
            </p>
            <span
              className={
                "inline-flex items-center bg-green-100 text-green-800 text-xs ml-5 font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300" +
                (project.status === "done"
                  ? " dark:bg-green-900 dark:text-green-300 bg-green-100 text-green-800"
                  : "  bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300")
              }
            >
              <span
                className={
                  "w-2 h-2 mr-1 bg-green-500 rounded-full" +
                  (project.status === "done" ? " bg-green-500" : " bg-red-500")
                }
              ></span>
              {project.status === "done" ? "Available" : "Working on"}
            </span>
          </div>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {project.description}
          </p>

          <ul className="grid md:grid-cols-3 grid-cols-2 gap-y-5 gap-x-5 col-auto  mt-5">
            {project.techStack.map((tech) => {
              return (
                <li
                  className="bg-[#ff7f01] text-center text-md  font-semibold py-1 rounded-lg text-white"
                  key={tech}
                >
                  {tech}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#121212] opacity-0 group-hover:h-full group-hover:opacity-90 duration-300">
        <div className="flex justify-between w-full px-10 items-center">
          <Link
            href={project.previewLink}
            className="mt-5 px-8 py-3 rounded-full text-white text-lg font-semibold border border-[#ff7f01] hover:bg-[#ff7f01] duration-300"
          >
            Preview
          </Link>
          <Link
            href={project.githubLink}
            className="mt-5 px-8 py-3 rounded-full text-white text-lg font-semibold  border border-[#ff7f01] hover:bg-[#ff7f01] duration-300"
          >
            Github
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Project;
