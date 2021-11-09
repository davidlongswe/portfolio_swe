import "./project.css";

const Project = ({ img, link, name }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        {name}
      </a>
    </div>
  );
};

export default Project;
