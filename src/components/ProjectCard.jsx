import PropTypes from "prop-types";

const ProjectCard = ({ image, text, description, link, languages }) => {
  return (
    <div
      id="projectCard"
      className={`w-[360px] max-sm:w-[330px] max-sm:justify-center max-sm:items-center min-h-[560px] hover:shadow-2xl flex flex-col space-y-5 shadow-lg rounded-lg p-5 bg-cardColor`}
    >
      <div className="w-full flex items-center justify-center">
        <img
          src={image}
          alt="Image"
          className="w-[100%] shadow h-[260px] rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col items-start justify-start space-y-3">
        <div className="text-orange font-medium text-base ">{text}</div>
        <div className="text-card text-sm font-bold">{languages}</div>
        <div className="text-text font-light text-sm line-clamp-5">
          {description}
        </div>
      </div>
      <a
        target="_blank"
        href={link}
        className="text-xs text-center mx-auto bg-card hover:shadow-2xl text-white hover:rounded-full p-4 px-6"
      >
        View Live application
      </a>
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(PropTypes.string),
  actualWidth: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default ProjectCard;
