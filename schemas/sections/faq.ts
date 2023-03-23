/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  name: "faq",
  type: "document",
  title: "Faq",
  fields: [
    {
      name: "id",
      type: "number",
      title: "ID:",
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
  ],
};
