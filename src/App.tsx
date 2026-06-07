import { useState } from "react";
import { ProjectCard } from "./components/ProjectCard/ProjectCard";
import { articles, getProjects, getTalks } from "./data";
import { Resume } from "./components/Resume/Resume";
import TalkCard from "./components/TalkCard/TalkCard";
import ArticleCard from "./components/ArticleCard/ArticleCard";
import { availableLanguages, translations, type Language } from "./i18n";

type LanguageFlagProps = {
  language: Language;
};

function LanguageFlag({ language }: LanguageFlagProps) {
  if (language === "fr") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 18 12"
        className="h-3.5 w-[1.125rem] rounded-[2px] shadow-sm"
      >
        <rect width="6" height="12" fill="#1d4ed8" />
        <rect x="6" width="6" height="12" fill="#ffffff" />
        <rect x="12" width="6" height="12" fill="#dc2626" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 18 12"
      className="h-3.5 w-[1.125rem] rounded-[2px] shadow-sm"
    >
      <rect width="18" height="12" fill="#1d4ed8" />
      <path
        d="M0 1 7 5.5H9L0 0.5V1ZM18 1V0.5L9 5.5H11L18 1ZM0 11V11.5L7 6.5H5L0 11ZM18 11 11 6.5H9l9 5v-.5Z"
        fill="#ffffff"
      />
      <path
        d="M0 0 7.5 4.75H9.5L18 0H16L9 4.25H8.5L1.5 0H0ZM18 12 10.5 7.25H8.5L0 12h2l7-4.25h.5l7 4.25h1.5ZM0 12l7.5-4.75H6L0 11v1ZM18 12v-1l-6-3.75h-1.5L18 12Z"
        fill="#dc2626"
      />
      <rect x="7" width="4" height="12" fill="#ffffff" />
      <rect y="4" width="18" height="4" fill="#ffffff" />
      <rect x="7.75" width="2.5" height="12" fill="#dc2626" />
      <rect y="4.75" width="18" height="2.5" fill="#dc2626" />
    </svg>
  );
}

function App() {
  const [activePage, setActivePage] = useState("resume");
  const [language, setLanguage] = useState<Language>("fr");

  const content = translations[language];
  const projects = getProjects(language);
  const talks = getTalks(language);

  const showPage = (page: string) => {
    setActivePage(page);
  };

  const scrollIfMobile = (elementId: string) => {
    if (window.innerWidth < 1024) {
      const element = document.getElementById(elementId);
      element?.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  };

  return (
    <>
      <div className="mx-5 lg:mx-16">
        <nav className="flex items-center md:justify-center mb-8 bg-white p-2 rounded-xl shadow-md sticky top-1 lg:top-5 z-50 mx-auto md:max-width-[1200px] px-8 overflow-auto scrollbar-hide">
          <a
            id="resumeLink"
            href="#"
            className={`py-3 px-6 mx-1 text-gray-600 font-medium rounded-xl transition-all duration-300 hover:bg-blue-50 ${
              activePage === "resume" ? "bg-blue-100 text-blue-800" : ""
            }`}
            onClick={() => {
              if (activePage !== "resume") {
                showPage("resume");
                scrollIfMobile("resumeLink");
              }
            }}
          >
            {content.nav.resume}
          </a>
          <a
            id="projectsLink"
            href="#"
            className={`py-3 px-6 mx-1 text-gray-600 font-medium rounded-xl transition-all duration-300 hover:bg-blue-50 ${
              activePage === "projects" ? "bg-blue-100 text-blue-800" : ""
            }`}
            onClick={() => {
              if (activePage !== "projects") {
                showPage("projects");
                scrollIfMobile("projectsLink");
              }
            }}
          >
            {content.nav.projects}
          </a>
          <a
            id="talksLink"
            href="#"
            className={`py-3 px-6 mx-1 text-gray-600 font-medium rounded-xl transition-all duration-300 hover:bg-blue-50 ${
              activePage === "talks" ? "bg-blue-100 text-blue-800" : ""
            }`}
            onClick={() => {
              if (activePage !== "talks") {
                showPage("talks");
                scrollIfMobile("talksLink");
              }
            }}
          >
            {content.nav.talks}
          </a>
          <a
            id="articlesLink"
            href="#"
            className={`py-3 px-6 mx-1 text-gray-600 font-medium rounded-xl transition-all duration-300 hover:bg-blue-50 ${
              activePage === "articles" ? "bg-blue-100 text-blue-800" : ""
            }`}
            onClick={() => {
              if (activePage !== "articles") {
                showPage("articles");
                scrollIfMobile("articlesLink");
              }
            }}
          >
            {content.nav.articles}
          </a>

          <div
            className="flex items-center ml-2 pl-3 border-l border-gray-200 min-w-fit"
            aria-label={content.languageSwitchLabel}
          >
            {availableLanguages.map((lang) => (
              <button
                key={lang}
                type="button"
                className={`py-3 px-4 mx-1 text-gray-600 font-medium rounded-xl transition-all duration-300 hover:bg-blue-50 ${
                  language === lang ? "bg-blue-100 text-blue-800" : ""
                }`}
                onClick={() => setLanguage(lang)}
              >
                <span
                  className="mr-2 inline-flex items-center"
                  aria-hidden="true"
                >
                  <LanguageFlag language={lang} />
                </span>
                {content.languages[lang]}
              </button>
            ))}
          </div>
        </nav>

        {/* Resume Page */}
        <div
          id="resume"
          className={`${
            activePage === "resume" ? "block animate-fadeIn" : "hidden"
          } mb-5`}
        >
          <Resume language={language} />
        </div>

        {/* Projects Page */}
        <div
          id="projects"
          className={`${
            activePage === "projects" ? "block animate-fadeIn" : "hidden"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                imageUrl={import.meta.env.BASE_URL + project.imageUrl}
                websiteUrl={project.websiteUrl}
                tasks={project.tasks}
                visitWebsiteLabel={content.visitWebsite}
              />
            ))}
          </div>
        </div>

        {/* Talks Page */}
        <div
          id="talks"
          className={`${
            activePage === "talks" ? "block animate-fadeIn" : "hidden"
          }`}
        >
          {talks.map((talk, index) => (
            <TalkCard key={index} talk={talk} ctaLabel={content.viewTalk} />
          ))}
        </div>

        {/* Articles Page */}
        <div
          id="articles"
          className={`${
            activePage === "articles" ? "block animate-fadeIn" : "hidden"
          } `}
        >
          <h3 className="text-lg font-semibold mt-2">
            {content.articlesIntro}
          </h3>
          {articles.map((article, index) => (
            <ArticleCard key={index} article={article} language={language} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
