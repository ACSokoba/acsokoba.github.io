import type { Technology } from "./components/ProjectCard/ProjectCardModel";
import type { JobId } from "./components/Resume/ResumeModel";

export type Language = "fr" | "en";

type PageKey = "resume" | "projects" | "talks" | "articles";

type Skill = {
  label: string;
  color: string;
};

type EducationItem = {
  year: string;
  degree: string;
  school: string;
};

type LanguageItem = {
  name: string;
  level: string;
};

type CertificationItem = {
  name: string;
  year: string;
};

type ResumeJob = {
  period: string;
  title: string;
  company: string;
  tasks: string[];
  technicalEnvironmentLabel: string;
  technicalEnvironment: string;
};

type ResumeContent = {
  role: string;
  summary: string;
  pdf: {
    buttonLabel: string;
    englishVersionLabel: string;
    frenchVersionLabel: string;
  };
  sections: {
    skills: string;
    education: string;
    languages: string;
    certifications: string;
    experience: string;
  };
  skills: Skill[];
  education: EducationItem[];
  languages: LanguageItem[];
  certifications: CertificationItem[];
  experience: Record<JobId, ResumeJob>;
};

type ProjectContent = {
  title: string;
  description: string;
  technologies: Technology[];
  imageUrl: string;
  websiteUrl?: string;
  tasks: string[];
};

type TalkContent = {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
};

type TranslationSet = {
  nav: Record<PageKey, string>;
  articlesIntro: string;
  languageSwitchLabel: string;
  languages: Record<Language, string>;
  noLinkPreview: string;
  visitWebsite: string;
  viewTalk: string;
  resume: ResumeContent;
  projects: ProjectContent[];
  talks: TalkContent[];
};

export const availableLanguages: Language[] = ["fr", "en"];

export const languageFlags: Record<Language, string> = {
  fr: "🇫🇷",
  en: "🇬🇧",
};

export const jobOrder: JobId[] = ["sfr", "carrefour", "orange"];

export const translations: Record<Language, TranslationSet> = {
  fr: {
    nav: {
      resume: "CV",
      projects: "Projets",
      talks: "Conférences",
      articles: "Articles",
    },
    articlesIntro:
      "Je liste ici quelques ressources et articles que j'ai trouvés utiles ou intéressants.",
    languageSwitchLabel: "Choisir la langue",
    languages: {
      fr: "FR",
      en: "EN",
    },
    noLinkPreview: "Aucun aperçu du lien",
    visitWebsite: "Visiter le site",
    viewTalk: "Voir",
    resume: {
      role: "Développeur fullstack senior",
      summary:
        "Avec 6 ans d'expérience en développement web dans des environnements agiles, j'ai acquis de solides compétences techniques et humaines. Je reste attentif aux bonnes pratiques afin de garder mes compétences pertinentes et utiles. Je suis prêt à contribuer aux futurs projets avec rigueur, énergie et sens de l'impact collectif.",
      pdf: {
        buttonLabel: "Télécharger le CV en PDF",
        englishVersionLabel: "Version anglaise",
        frenchVersionLabel: "Version française",
      },
      sections: {
        skills: "Compétences",
        education: "Formation",
        languages: "Langues",
        certifications: "Certifications",
        experience: "Expérience",
      },
      skills: [
        { label: "Angular", color: "blue" },
        { label: "Java", color: "green" },
        { label: "NodeJS", color: "green" },
        { label: "HTML", color: "blue" },
        { label: "CSS", color: "blue" },
        { label: "TypeScript", color: "blue" },
        { label: "Esprit critique", color: "purple" },
        { label: "Apprentissage rapide", color: "purple" },
        { label: "Communication claire", color: "purple" },
      ],
      education: [
        {
          year: "2019",
          degree: "Diplôme d'ingénieur en télécommunications et réseaux",
          school: "Institut Sup Galilée, Paris",
        },
      ],
      languages: [
        { name: "Anglais", level: "Courant, TOEIC 720" },
        { name: "Français", level: "Langue maternelle" },
      ],
      certifications: [
        { name: "AWS Cloud Practitioner", year: "2023" },
        { name: "UX-PM1", year: "2022" },
      ],
      experience: {
        sfr: {
          period: "Juin 2024 - Aujourd'hui",
          title: "Développeur frontend senior",
          company: "SFR, Paris",
          tasks: [
            "Améliorations UI, implémentation de fonctionnalités et correction de bugs",
            "Développement du parcours d'achat et de location pour la vidéo à la demande et du lecteur vidéo",
            "Mise en place d'outils d'analyse d'audience pour les lecteurs Live, VOD et trailers",
            "Refactoring et mises à jour du framework",
          ],
          technicalEnvironmentLabel: "Environnement technique",
          technicalEnvironment:
            "Angular 18, Nx, RxJS, Jenkins, suite Atlassian",
        },
        carrefour: {
          period: "2021 - 2024",
          title: "Ingénieur logiciel fullstack senior",
          company: "Carrefour, Paris",
          tasks: [
            "Développement front et back de fonctionnalités et parcours clients, avec plus de 10 M EUR de facturation et des milliers de factures par jour en production",
            "Coordination avec les équipes API partenaires, évaluation de complexité et participation aux choix d'architecture",
            "Développement backend sur plusieurs microservices Java 11 et Spring Boot, revue de code et amélioration de l'expérience développeur",
            "Amélioration des performances applicatives en résolvant des goulots réseau et architecture",
            "Participation à la rédaction des user stories et aux sessions de grooming",
            "Planification et supervision des mises en préproduction et production avec les équipes DevOps",
          ],
          technicalEnvironmentLabel: "Environnement technique",
          technicalEnvironment:
            "Angular 14+, Java 11 + Reactor, Spring Boot, Kubernetes, Postgres, GitLab, Cypress, Jenkins, Jira, Confluence",
        },
        orange: {
          period: "2019 - 2021",
          title: "Ingénieur logiciel fullstack",
          company: "Orange, Paris",
          tasks: [
            "Développement de plus de 15 parcours clients à forte valeur business pour un site dépassant 15 millions de visites uniques par mois",
            "Développement dans une architecture modulaire micro-frontend, mises à jour Angular et migrations de code",
            "Développement backend de microservices REST en NodeJS",
            "Refactoring, amélioration du code existant et mise en place de tests d'intégration, unitaires et end-to-end",
            "Accompagnement d'alternants et stagiaires dans leur progression technique et professionnelle",
          ],
          technicalEnvironmentLabel: "Environnement technique",
          technicalEnvironment:
            "Angular 11, NodeJS 14, Javascript, Typescript, Git, HTML, CSS, Bootstrap, Jenkins, VS Code, Jest, Jasmine, Mocha, Protractor, Jira, Confluence, Postman",
        },
      },
    },
    projects: [
      {
        title: "Lekza vtc",
        description:
          "Lekza est un projet réalisé pour un client du secteur VTC. Il s'agit d'une landing page simple qui met en avant ses services et ses coordonnées.",
        technologies: [
          { name: "Angular", color: "blue" },
          { name: "HTML", color: "red" },
          { name: "CSS", color: "red" },
          { name: "Typescript", color: "purple" },
          { name: "Netlify", color: "green" },
        ],
        tasks: [
          "Conception et développement d'une landing page responsive",
          "Implémentation d'un formulaire de contact avec validation",
          "Configuration DNS et gestion du nom de domaine",
          "Déploiement du site sur Netlify",
          "Mise en place d'une pipeline CI/CD pour les déploiements automatiques",
        ],
        imageUrl: "assets/images/lekza_website_peek.png",
        websiteUrl: "https://vtc.lekza-transexpress.net/",
      },
      {
        title: "Automachines CI",
        description:
          "Implémentation et sécurisation d'un serveur middleware pour le paiement mobile des machines à café de l'entreprise. Lorsqu'un client paie avec son téléphone, la transaction transite par ce serveur qui journalise aussi l'activité et envoie des rapports mensuels au client.",
        technologies: [
          { name: "NodeJS", color: "purple" },
          { name: "NestJS", color: "purple" },
          { name: "Typescript", color: "purple" },
          { name: "Hosting VPS", color: "green" },
          { name: "Docker", color: "blue" },
          { name: "Github Actions", color: "blue" },
          { name: "Swagger", color: "green" },
        ],
        tasks: [
          "Implémentation de l'application en TypeScript avec Node.js et NestJS",
          "Configuration et sécurisation du VPS avec pare-feu, chiffrement et reverse proxy Nginx",
          "Conteneurisation de l'application avec Docker",
          "Mise en place d'une pipeline CI/CD avec GitHub Actions",
          "Documentation du code avec Swagger",
        ],
        imageUrl: "assets/images/automachines_CI_peek.png",
        websiteUrl: "https://www.linkedin.com/company/automachinesci/",
      },
      {
        title: "Clair de lune",
        description:
          "Site web de l'école Clair de lune. Le site valorise l'établissement et ses services, construit avec Angular, hébergé sur AWS S3 et mis à jour automatiquement via CI.",
        technologies: [
          { name: "Angular", color: "blue" },
          { name: "AWS S3", color: "green" },
          { name: "Github Actions", color: "blue" },
        ],
        tasks: [
          "Conception d'un site responsive pour l'école avec Angular",
          "Mise en place d'un système de gestion de contenu pour faciliter les mises à jour",
          "Configuration d'un bucket AWS S3 pour l'hébergement",
          "Configuration de CloudFront pour la distribution du contenu",
          "Création d'une pipeline CI/CD avec GitHub Actions pour les déploiements automatiques",
        ],
        imageUrl: "assets/images/clair_de_lune_peek.png",
        websiteUrl: "https://clairdeluneci.com/",
      },
    ],
    talks: [
      {
        title: "Presentation Angular chez Devoteam MMTT",
        description:
          "Presentation d'Angular, de la philosophie de la technologie, de la syntaxe du langage et des cas d'usage adaptes.",
        imageUrl: "assets/images/talk_placeholder.png",
        url: "https://www.linkedin.com/posts/aboubakar-christian-sokoba-304418146_quel-%C3%A9tait-ton-dernier-d%C3%A9fi-moi-c%C3%A9tait-activity-7057347206986493952-Hg4Q?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACNNGLQBoXUlGhH5PoWoOGsCscRfypStDx0",
      },
    ],
  },
  en: {
    nav: {
      resume: "Resume",
      projects: "Projects",
      talks: "Talks",
      articles: "Articles",
    },
    articlesIntro:
      "Here I list some resources and articles that I found useful or interesting.",
    languageSwitchLabel: "Choose language",
    languages: {
      fr: "FR",
      en: "EN",
    },
    noLinkPreview: "No link preview",
    visitWebsite: "Visit Website",
    viewTalk: "View",
    resume: {
      role: "Senior fullstack developer",
      summary:
        "With 6 years of web development experience in agile environments, I have built strong technical and soft skills. Staying aligned with technical good practices helps me keep my skills relevant and useful. I am ready to contribute to future projects with rigor, energy and a strong sense of team impact.",
      pdf: {
        buttonLabel: "Download Resume PDF",
        englishVersionLabel: "English Version",
        frenchVersionLabel: "French Version",
      },
      sections: {
        skills: "Skills",
        education: "Education",
        languages: "Languages",
        certifications: "Certifications",
        experience: "Experience",
      },
      skills: [
        { label: "Angular", color: "blue" },
        { label: "Java", color: "green" },
        { label: "NodeJS", color: "green" },
        { label: "HTML", color: "blue" },
        { label: "CSS", color: "blue" },
        { label: "TypeScript", color: "blue" },
        { label: "Critical thinker", color: "purple" },
        { label: "Fast learner", color: "purple" },
        { label: "Clear communicator", color: "purple" },
      ],
      education: [
        {
          year: "2019",
          degree: "Diploma of Telecommunication and Network Engineer",
          school: "Institut Sup Galilee, Paris",
        },
      ],
      languages: [
        { name: "English", level: "Proficient, TOEIC 720" },
        { name: "French", level: "Native" },
      ],
      certifications: [
        { name: "AWS Cloud Practitioner", year: "2023" },
        { name: "UX-PM1", year: "2022" },
      ],
      experience: {
        sfr: {
          period: "June 2024 - Present",
          title: "Senior Frontend Developer",
          company: "SFR, Paris",
          tasks: [
            "UI enhancements, feature implementation, and bug fixes",
            "Development of the purchase and rental journey for video-on-demand and the video player",
            "Implementation of audience analytics tools for live, VOD and trailer players",
            "Refactoring and framework updates",
          ],
          technicalEnvironmentLabel: "Technical environment",
          technicalEnvironment:
            "Angular 18, Nx, RxJS, Jenkins, Atlassian Suite",
        },
        carrefour: {
          period: "2021 - 2024",
          title: "Senior Fullstack Software Engineer",
          company: "Carrefour, Paris",
          tasks: [
            "Frontend and backend development of customer journeys and features handling more than EUR 10M in invoicing and thousands of invoices per day in production",
            "Coordination with partner API teams, complexity assessment and contribution to architecture design",
            "Backend development on several Java 11 and Spring Boot microservices, code review, and improvement of developer experience",
            "Improvement of application performance by solving network and architecture bottlenecks",
            "Contribution to user story specifications and grooming sessions",
            "Planning and supervision of pre-production and production releases with DevOps teams",
          ],
          technicalEnvironmentLabel: "Technical environment",
          technicalEnvironment:
            "Angular 14+, Java 11 + Reactor, Spring Boot, Kubernetes, Postgres, GitLab, Cypress, Jenkins, Jira, Confluence",
        },
        orange: {
          period: "2019 - 2021",
          title: "Fullstack Software Engineer",
          company: "Orange, Paris",
          tasks: [
            "Development of more than 15 high-value customer pages for a website reaching over 15 million unique visits per month",
            "Development in a modular micro-frontend architecture, including Angular updates and code migrations",
            "Backend development of REST microservices in NodeJS",
            "Refactoring, improvement of existing code, and implementation of integration, unit, and end-to-end tests",
            "Support for interns and apprentices through structured technical guidance",
          ],
          technicalEnvironmentLabel: "Technical environment",
          technicalEnvironment:
            "Angular 11, NodeJS 14, Javascript, Typescript, Git, HTML, CSS, Bootstrap, Jenkins, VS Code, Jest, Jasmine, Mocha, Protractor, Jira, Confluence, Postman",
        },
      },
    },
    projects: [
      {
        title: "Lekza vtc",
        description:
          "Lekza is a project I built for a client in the personal VTC sector. It is a simple landing page promoting the client's services and contact details.",
        technologies: [
          { name: "Angular", color: "blue" },
          { name: "HTML", color: "red" },
          { name: "CSS", color: "red" },
          { name: "Typescript", color: "purple" },
          { name: "Netlify", color: "green" },
        ],
        tasks: [
          "Designed and developed a responsive landing page",
          "Implemented a contact form with validation",
          "Set up DNS configuration and domain management",
          "Deployed the website to Netlify hosting",
          "Created a CI/CD pipeline for automatic deployment",
        ],
        imageUrl: "assets/images/lekza_website_peek.png",
        websiteUrl: "https://vtc.lekza-transexpress.net/",
      },
      {
        title: "Automachines CI",
        description:
          "Implemented and secured a middleware server for mobile payments on the company's coffee machines. When customers pay with their phone, the transaction goes through the middleware, which also logs activity and sends monthly reports to the client.",
        technologies: [
          { name: "NodeJS", color: "purple" },
          { name: "NestJS", color: "purple" },
          { name: "Typescript", color: "purple" },
          { name: "Hosting VPS", color: "green" },
          { name: "Docker", color: "blue" },
          { name: "Github Actions", color: "blue" },
          { name: "Swagger", color: "green" },
        ],
        tasks: [
          "Implemented the application in TypeScript using Node.js and NestJS",
          "Set up and secured the VPS with a firewall, encryption, and an Nginx reverse proxy",
          "Containerized the application with Docker",
          "Set up a CI/CD pipeline with GitHub Actions",
          "Documented the code with Swagger",
        ],
        imageUrl: "assets/images/automachines_CI_peek.png",
        websiteUrl: "https://www.linkedin.com/company/automachinesci/",
      },
      {
        title: "Clair de lune",
        description:
          "Website for the Clair de lune school. It promotes the school and its services, uses Angular, is hosted on AWS S3, and is updated automatically through CI.",
        technologies: [
          { name: "Angular", color: "blue" },
          { name: "AWS S3", color: "green" },
          { name: "Github Actions", color: "blue" },
        ],
        tasks: [
          "Designed a responsive school website with Angular",
          "Implemented a content management system for easier updates",
          "Set up an AWS S3 bucket for hosting",
          "Configured CloudFront for content distribution",
          "Created a CI/CD pipeline with GitHub Actions for automatic deployment",
        ],
        imageUrl: "assets/images/clair_de_lune_peek.png",
        websiteUrl: "https://clairdeluneci.com/",
      },
    ],
    talks: [
      {
        title: "Angular talk at Devoteam MMTT",
        description:
          "Presentation of Angular, the philosophy behind the technology, the language syntax, and the situations where it is a good fit.",
        imageUrl: "assets/images/talk_placeholder.png",
        url: "https://www.linkedin.com/posts/aboubakar-christian-sokoba-304418146_quel-%C3%A9tait-ton-dernier-d%C3%A9fi-moi-c%C3%A9tait-activity-7057347206986493952-Hg4Q?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACNNGLQBoXUlGhH5PoWoOGsCscRfypStDx0",
      },
    ],
  },
};
