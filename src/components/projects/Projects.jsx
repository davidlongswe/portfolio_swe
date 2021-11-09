import "./projects.css";
import Project from "../project/Project";
import { projects } from "../../data";

const Projects = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Portfölj</h1>
        <p className="pl-desc">
          Bläddra genom mina tidigare genomförda projekt och få en känsla av vad
          jag kan göra för dig!
        </p>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Project
            key={item.id}
            img={item.img}
            link={item.link}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
