"use client";

import { usePreview } from "../../lib/sanity.preview";

import Projects from "../Projects";

type Props = {
  projectsQuery: string;
};

function PreviewProjects({ projectsQuery }: Props) {
  const projectsData = usePreview(null, projectsQuery);
  return <Projects projectsData={projectsData} />;
}

export default PreviewProjects;
