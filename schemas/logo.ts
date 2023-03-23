import { Rule } from "sanity";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  name: "logo",
  type: "document",
  title: "Logo",
  fields: [
    {
      name: "logo",
      type: "string",
      title: "Logo text: ",
    },
  ],
};
