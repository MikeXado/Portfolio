import { Rule } from "sanity";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  name: "services",
  type: "document",
  title: "Services",
  fields: [
    {
      name: "idx",
      title: "Number",
      type: "number",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
  ],
};
