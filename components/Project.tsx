import Image from "next/image";
import Link from "next/link";
import React from "react";
import urlFor from "../lib/urlFor";
import { ProjectType } from "../typings";

function Project({ project }: { project: ProjectType }) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-500 overflow-hidden border border-gray-100 card-hover h-full flex flex-col hover:border-blue-200">
      <div className="relative overflow-hidden">
        <div className="aspect-video relative">
          <Image
            fill
            src={urlFor(project.img).url()}
            alt={project.title}
            className="object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <div className="absolute top-4 right-4 transform group-hover:scale-110 transition-transform duration-300">
          <span
            className={
              "inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm transition-all duration-300 " +
              (project.status === "done"
                ? "bg-green-100/90 text-green-800 border border-green-200"
                : "bg-orange-100/90 text-orange-800 border border-orange-200")
            }
          >
            <span
              className={
                "w-2 h-2 mr-1.5 rounded-full pulse-slow " +
                (project.status === "done" ? "bg-green-500" : "bg-orange-500")
              }
            ></span>
            {project.status === "done" ? "Live" : "In Progress"}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-all duration-300 group-hover:translate-x-1">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed flex-grow transition-all duration-300 group-hover:text-gray-800">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, index) => {
            return (
              <span
                className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-sm font-medium rounded-lg border border-blue-100 hover:scale-110 hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
                key={tech}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {tech}
              </span>
            );
          })}
        </div>

        <div className="flex gap-3 mt-auto">
          <Link
            href={project.previewLink}
            className="flex-1 text-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-glow transition-all duration-500 hover:scale-105 hover:-translate-y-1 relative overflow-hidden group/btn"
          >
            <span className="relative z-10">Live Demo</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
          </Link>
          <Link
            href={project.githubLink}
            className="flex-1 text-center px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:shadow-soft"
          >
            GitHub
          </Link>
        </div>
      </div>

      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/50 rounded-2xl transition-all duration-500 pointer-events-none"></div>
    </div>
  );
}

export default Project;
