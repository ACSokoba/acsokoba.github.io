import { ProjectCardProps } from "./ProjectCardModel";

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  imageUrl,
  websiteUrl,
  tasks,
  visitWebsiteLabel = "Visit Website",
}) => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-100 text-blue-800";
      case "green":
        return "bg-green-100 text-green-800";
      case "purple":
        return "bg-purple-100 text-purple-800";
      case "red":
        return "bg-red-100 text-red-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {websiteUrl == undefined ? (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-40 object-cover aspect-video"
        />
      ) : (
        <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-40 object-cover aspect-video"
          />
        </a>
      )}
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <div className="max-w-none text-gray-600 mb-3">{description}</div>

        {tasks && tasks.length > 0 && (
          <div className="mt-3 mb-4">
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              {tasks.map((task, index) => (
                <li key={index} className="text-md">
                  {task}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className={`inline-block px-3 py-1 rounded-full text-sm mr-2 mb-2 ${getColorClasses(
                tech.color,
              )}`}
            >
              {tech.name}
            </span>
          ))}
        </div>
        {websiteUrl && (
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-600 hover:text-blue-800"
          >
            {visitWebsiteLabel} →
          </a>
        )}
      </div>
    </div>
  );
};
