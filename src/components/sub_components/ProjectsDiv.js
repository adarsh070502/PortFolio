import React from "react";

function ProjectsDiv(props) {
  return (
    <div>
      <div className="Project-box">
        <div className="project-item portfolio">
          <div className="flip-card-front">
            <h3 className="project-title">{props.each_project.projectName}</h3>
            <img src={props.each_project.imageUrl} className="project-img" />
            <p className="para-project-summary">
              {props.each_project.projectSummary}
              <span style={{ textDecoration: "underline" }}>
                (Flip for Details)
              </span>
            </p>
          </div>
          <div className="flip-card-back">
            <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
              <span style={{ color: "#00a9ff" }}>
                <b>Objective: </b>
              </span>
              {props.each_project.description}
            </p>
            <p>
              <span style={{ color: "#00a9ff" }}>
                <b>Technologies Used: </b>
              </span>
              {props.each_project.technologiesUsed.map((tech, index) => (
                <span key={index}>
                  {tech}
                  {index < props.each_project.technologiesUsed.length - 1
                    ? ", "
                    : "."}
                </span>
              ))}
            </p>
            <p>
              <span style={{ color: "#00a9ff" }}>
                <b>Duration: </b>
              </span>
              {props.each_project.startDate} - {props.each_project.endDate}
            </p>
            <p>
              <span style={{ color: "#00a9ff" }}>
                <b>Git Hub: </b>
              </span>
              <a
                href={props.each_project.githubLink}
                className="github-link"
                target="_blank"
              >
                click here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsDiv;
