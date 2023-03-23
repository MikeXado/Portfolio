import { Image } from "sanity";

interface Base {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}

interface LinkType extends Base {
  href: string;
  title: string;
  img: Image;
}

interface LogoType extends Base {
  logo: string;
}

interface HeroType extends Base {
  decription: string;
  subtitle: string;
  title: string;
}

interface TechType extends Base {
  alt: string;
  techImage: Image;
}

interface ProjectType extends Base {
  description: string;
  githubLink: string;
  img: Image;
  previewLink: string;
  status: string;
  techStack: string[];
  title: string;
}

interface ServiceType extends Base {
  idx: number;
  title: string;
}

export type {
  LinkType,
  LogoType,
  HeroType,
  TechType,
  ProjectType,
  ServiceType,
};
