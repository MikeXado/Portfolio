import { groq } from "next-sanity";

const linksQuery = groq` 
  *[_type=="links"] {
    ...,
   } | order(_updatedAt , desc)
 `;

const heroQuery = groq` 
  *[_type=="hero"] {
    ...,
  
   } 
 `;

const servicesQuery = groq` 
  *[_type=="services"] {
    ...,
   } | order(idx , asc)
 `;

const techQuery = groq` 
  *[_type=="tech"] {
    ...,
   } 
 `;

const projectsQuery = groq`
  *[_type=="projects"] {
    ...,
   } | order(_createdAt , asc)
 `;

const faqQuery = groq`
*[_type=="faq"] {
  ...,
 } 
`;

const logoQuery = groq`
*[_type=="logo"] {
  ...,
 } 
`;

export {
  linksQuery,
  heroQuery,
  servicesQuery,
  projectsQuery,
  faqQuery,
  techQuery,
  logoQuery,
};
