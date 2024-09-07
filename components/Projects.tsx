import React from "react";
import { ProjectType } from "../typings";
import Project from "./Project";

function Projects({ projectsData }: { projectsData: ProjectType[] }) {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-5 mt-24">
      <h2 className="text-white text-5xl  font-semibold">Featured projects</h2>
      <div className="grid mt-10 lg:grid-cols-3 justify-items-center md:grid-cols-2 gap-y-10 gap-x-5">
        {projectsData?.map((project) => {
          return <Project key={project._id} project={project} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
