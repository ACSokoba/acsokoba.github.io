import { Project } from "./components/ProjectCard/ProjectCardModel";
import { Language, translations } from "./i18n";

export const getProjects = (language: Language): Project[] =>
  translations[language].projects;

export interface Talk {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

export const getTalks = (language: Language): Talk[] =>
  translations[language].talks;

// Define the Article interface
export interface Article {
  url: string;
  title?: string;
}

export const articles: Article[] = [
  { url: "https://microservices.io/patterns/data/saga.html" },
  {
    url: "https://philbooth.me/blog/some-useful-non-obvious-postgres-patterns",
  },
  { url: "https://cloud.google.com/apis/design" },
  {
    url: "https://christianlydemann.com/18-performance-optimization-techniques-for-angular-applications-podcast-with-michael-hladky/",
    title:
      "18 Performance Optimization Techniques For Angular Applications (podcast with Michael Hladky)",
  },
  { url: "https://roadmap.sh/" },
  { url: "https://refactoring.guru/fr/refactoring/techniques" },
];
