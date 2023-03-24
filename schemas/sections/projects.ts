/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  name: "projects",
  type: "document",
  title: "Projects",
  fields: [
    {
      name: "idx",
      type: "number",
      title: "Idx",
    },
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "status",
      type: "string",
      title: "Status",
    },
    {
      name: "techStack",
      type: "array",
      of: [
        {
          type: "string",
          title: "Tech stack name: ",
        },
      ],
    },
    {
      name: "img",
      type: "image",
      title: "Project preview image: ",
    },
    {
      name: "previewLink",
      type: "url",
      title: "Preview project link: ",
    },
    {
      name: "githubLink",
      type: "url",
      title: "Github source code: ",
    },
  ],
};
