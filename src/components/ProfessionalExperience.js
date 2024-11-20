import React, { useState, useEffect } from "react";

function ProfessionalExperience() {
  const [experience_data, updateExperienceData] = useState(null);

  useEffect(() => {
    fetch("/Files/professionalexperience.json")
      .then((response) => response.json())
      .then((data) => updateExperienceData(data))
      .catch((error) =>
        console.log("Error while extracting projects data: ", error)
      );
  }, []);

  return (
    <div className="container">
      <h2
        className="page-heading page-headers"
        style={{ paddingBottom: "50px" }}
      >
        Profession Experience Timeline
      </h2>
      <div className="row">
        <div className="col-md-12">
          <div className="main-timeline">
            {experience_data ? (
              experience_data.map((experience, index) => (
                <div className="timeline">
                  <div className="timeline-content">
                    <div className="timeline-icon">
                      <img
                        className="company-logo"
                        src={experience.companyLogo}
                        alt="Company Logo"
                      />
                    </div>
                    <div className="Heading-class">
                      <h3 className="company-title">
                        {experience.companyName}
                      </h3>
                      <h4 className="job-title">{experience.jobTitle}</h4>
                      <p className="duration-location">
                        {experience.duration}
                        <br />
                        {experience.location}
                      </p>
                    </div>
                    <ul>
                      <div className="description-class">
                        <li>
                          <h4 className="side-titles">Description:</h4>
                        </li>
                        <p className="description">{experience.description}</p>
                      </div>

                      <div className="projects-class">
                        <li>
                          <h4 className="side-titles">Projects:</h4>
                        </li>
                        {experience.projects.map((project, projectIndex) => (
                          <div key={projectIndex}>
                            <ul>
                              <li>
                                <p>
                                  <span className="project-side-titles">
                                    Title:
                                  </span>{" "}
                                  {project.name}
                                </p>
                                <p>
                                  <span className="project-side-titles">
                                    Description:
                                  </span>{" "}
                                  {project.description}
                                </p>
                                <p>
                                  <span className="project-side-titles">
                                    Impact:
                                  </span>{" "}
                                  {project.impact}
                                </p>
                              </li>
                            </ul>
                          </div>
                        ))}
                      </div>

                      <div className="Skills-class">
                        <li>
                          <h4 className="side-titles">Skills:</h4>
                        </li>
                        <p>
                          {experience.skills.map((tech, index) => (
                            <span key={index}>
                              {tech}
                              {index < experience.skills.length - 1
                                ? ", "
                                : "."}
                            </span>
                          ))}
                        </p>
                      </div>
                    </ul>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalExperience;
