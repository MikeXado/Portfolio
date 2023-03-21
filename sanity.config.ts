import { defineConfig, isDev } from "sanity";
import { visionTool } from "@sanity/vision";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: "Mihai_Portfolio_Studio",
  title: "Mihai_Portfolio_Studio",
  projectId: projectId,
  dataset: dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
