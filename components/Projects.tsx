import React from "react";
import { ProjectType } from "../typings";
import Project from "./Project";

function Projects({ projectsData }: { projectsData: ProjectType[] }) {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-5 mt-10 py-16">
      <div className="text-center mb-16 slide-up">
        <div className="inline-block mb-4">
          <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-semibold shadow-soft">
            My Work
          </span>
        </div>
        <h2 className="text-gray-900 text-5xl md:text-6xl font-bold mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Explore my latest work showcasing innovative solutions and creative
          development
        </p>
      </div>
      <div className="grid mt-12 lg:grid-cols-3 md:grid-cols-2 gap-8">
        {projectsData?.map((project, index) => {
          return (
            <div
              key={project._id}
              className="scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Project project={project} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
