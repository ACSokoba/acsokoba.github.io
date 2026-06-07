import { Talk } from "../../data";

type TalkCardProps = {
  talk: Talk;
  ctaLabel?: string;
};

function TalkCard({ talk, ctaLabel = "View" }: TalkCardProps) {
  const { title, description, imageUrl, url } = talk;

  return (
    <div className="flex rounded-xl mt-6 p-5 gap-3 bg-white mb-5">
      <div>
        <img
          src={imageUrl}
          alt={title}
          className="w-full max-h-[250px] rounded-xl"
        />
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p>{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-600 hover:text-blue-800 "
        >
          {ctaLabel} →
        </a>
      </div>
    </div>
  );
}

export default TalkCard;
