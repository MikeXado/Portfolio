/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  name: "tech",
  type: "document",
  title: "Tech section",

  fields: [
    {
      name: "techImage",
      type: "image",
      title: "Tech image:",
    },
    {
      name: "alt",
      title: "Alternative Text",
      type: "string",
    },
  ],
};
