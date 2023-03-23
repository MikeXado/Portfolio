/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  name: "links",
  type: "document",
  title: "Links",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "href",
      type: "string",
      title: "Url",
    },
    {
      name: "img",
      type: "image",
      title: "Image: ",
    },
  ],
};
