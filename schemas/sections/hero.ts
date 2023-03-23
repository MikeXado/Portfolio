/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
  name: "hero",
  type: "document",
  title: "Hero section",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "subtitle",
      type: "string",
      title: "Subtitle",
    },
    {
      name: "decription",
      type: "text",
      title: "Description",
    },
  ],
};
