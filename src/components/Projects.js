import React, { useState, useEffect } from "react";
import ProjectsDiv from "./sub_components/ProjectsDiv";

function Projects() {
  const [projects_data, updateProjectsData] = useState(null);

  useEffect(() => {
    fetch("/Files/projects.json")
      .then((response) => response.json())
      .then((data) => updateProjectsData(data))
      .catch((error) =>
        console.log("Error while extracting projects data: ", error)
      );
  }, []);

  return (
    <div className="projects-div">
      <h2 className="page-heading page-headers">My Projects</h2>
      <div className="projects-container">
        {projects_data ? (
          projects_data.map((project, index) => (
            <ProjectsDiv key={index} index={index} each_project={project} />
          ))
        ) : (
          <p>Loading Data...</p>
        )}
      </div>
    </div>
  );
}

export default Projects;
