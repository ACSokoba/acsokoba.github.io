import { useState } from "react";
import { jobOrder, translations } from "../../i18n";
import { JobId, ResumeProps } from "./ResumeModel";

const getSkillColorClasses = (color: string) => {
  switch (color) {
    case "blue":
      return "bg-blue-100 text-blue-800";
    case "green":
      return "bg-green-100 text-green-800";
    case "purple":
      return "bg-purple-100 text-purple-800";
    default:
      return "bg-blue-100 text-blue-800";
  }
};

const downloadResume = (fileName: string) => {
  const link = document.createElement("a");
  link.href = `assets/${fileName}`;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const Resume: React.FC<ResumeProps> = ({ language }) => {
  const [expandedJobs, setExpandedJobs] = useState({
    sfr: true,
    carrefour: true,
    orange: true,
  });

  const [showDropdown, setShowDropdown] = useState(false);
  const content = translations[language].resume;

  const toggleJob = (jobId: JobId) => {
    setExpandedJobs((prev) => ({
      ...prev,
      [jobId]: !prev[jobId],
    }));
  };

  return (
    <>
      <div className="bg-white rounded-xl p-8 mb-5 text-center shadow-md">
        <h1 className="text-[1.875rem] font-bold mb-2 text-gray-800">
          SOKOBA Aboubakar Christian
        </h1>
        <p className="text-lg text-gray-600 mb-4">{content.role}</p>
        <div className="flex flex-col justify-center flex-wrap gap-4">
          <a className="text-gray-600" href="mailto:sokobachristian@yahoo.fr">
            sokobachristian@yahoo.fr
          </a>
          <p className="text-gray-600">
            <a href="tel:+33781657490">+33 7 81 65 74 90</a> /
            <a href="tel:+2250509671351">+225 05 09 67 13 51</a>
          </p>
        </div>

        <p className="text-gray-600 mt-4 max-w-[42rem] mx-auto">
          {content.summary}
        </p>

        <div className="relative inline-block">
          <button
            className="cursor-pointer inline-block bg-blue-100 text-gray-800 py-3 px-6 mt-5 mb-2 rounded-xl font-medium transition-all duration-300 hover:bg-purple-100 hover:-translate-y-0.5 hover:shadow-lg border-none whitespace-nowrap"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {content.pdf.buttonLabel}
            <svg
              className={`inline-block ml-2 w-4 h-4 transition-transform duration-300 ${
                showDropdown ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {showDropdown && (
            <div className="absolute z-10 mt-1 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1" role="menu" aria-orientation="vertical">
                <button
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  onClick={() => {
                    downloadResume("Aboubakar_Resume_Fullstack_ENG_GD.pdf");
                    setShowDropdown(false);
                  }}
                >
                  {content.pdf.englishVersionLabel}
                </button>
                <button
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  onClick={() => {
                    downloadResume("Aboubakar_Resume_Fullstack_FR_GD.pdf");
                    setShowDropdown(false);
                  }}
                >
                  {content.pdf.frenchVersionLabel}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-5">
        <div className="flex flex-col gap-5">
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-100">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              {content.sections.skills}
            </h2>
            <div>
              {content.skills.map((skill) => (
                <span
                  key={skill.label}
                  className={`inline-block py-1 px-3 rounded-full text-sm mr-2 mb-2 ${getSkillColorClasses(
                    skill.color,
                  )}`}
                >
                  {skill.label}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-100">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              {content.sections.education}
            </h2>
            {content.education.map((item) => (
              <div
                key={`${item.year}-${item.degree}`}
                className="mb-6 last:mb-0"
              >
                <p className="text-sm text-gray-500 mb-2">{item.year}</p>
                <p className="font-semibold mb-1">{item.degree}</p>
                <p className="italic text-gray-600">{item.school}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-100">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              {content.sections.languages}
            </h2>
            {content.languages.map((item) => (
              <p key={item.name} className="mb-2 last:mb-0">
                <span className="font-semibold">{item.name}</span> -{" "}
                {item.level}
              </p>
            ))}
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-100">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              {content.sections.certifications}
            </h2>
            <div className="space-y-2">
              {content.certifications.map((item) => (
                <p key={item.name} className="mb-2 last:mb-0">
                  <span className="font-semibold">{item.name}</span>
                  <span className="text-sm text-gray-500 ml-2">
                    {item.year}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-100">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              {content.sections.experience}
            </h2>
            {jobOrder.map((jobId) => {
              const job = content.experience[jobId];

              return (
                <div key={jobId} className="mb-6 last:mb-0">
                  <p className="text-sm text-gray-500 mb-2">{job.period}</p>
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() => toggleJob(jobId)}
                  >
                    <p className="font-semibold mb-1">{job.title}</p>
                    <svg
                      className={`w-5 h-5 ml-2 transform transition-transform duration-300 ${
                        expandedJobs[jobId] ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <p className="italic text-gray-600 mb-2">{job.company}</p>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedJobs[jobId]
                        ? "max-h-[500px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="list-disc list-inside text-gray-600">
                      {job.tasks.map((task) => (
                        <li key={task} className="mb-1">
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    {job.technicalEnvironmentLabel}: {job.technicalEnvironment}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
