import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload.js";
import ProjectsDiv from "./sub_components/ProjectsDiv";

function Main() {
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
    <div className="Main">
      <div className="Intro-container Containers">
        <div className="Intro-Text-container">
          <div className="Intro-Text">
            Hey!
            <br />I am <span style={{ color: "#1e90ff" }}>Adarsh</span>
            <br />
            Full Stack Developer
            <br />
          </div>

          <div className="Resume-download-container">
            <a
              href="Files/ELURI_ADARSH.pdf"
              download="ELURI_ADARSH"
              className="Resume-download-anchor"
            >
              <button className="Resume-button">
                <CloudDownloadIcon fontSize="small" />
                Resume
              </button>
            </a>
          </div>
        </div>
        <div className="Intro-adarsh-image">
          <img className="Adarsh-Image" src="/images/adarsh.jpg" alt="Intro" />
        </div>
      </div>

      <h2 className="Website-Headers">ABOUT</h2>
      <div className="about-adarsh-container Containers">
        <div className="about-adarsh-flex">
          <div className="about-adarsh-image-container">
            <img
              src="/images/about_adarsh.jpg"
              alt="About Adarsh"
              className="About-Adarsh-Image"
            />
          </div>
          <div className="about-adarsh-para-container">
            <p align="justify" className="about-adarsh-para">
              <span style={{ fontWeight: "bold" }}>I'm Adarsh</span>
              <br />
              <br />
              I'm a passionate tech enthusiast based in Hyderabad. I hold a
              B.Tech degree in Electronics and Communication Engineering (ECE)
              with a CGPA of 8.0. Since September 2023, I have been working as a
              consultant at L&T, where I specialize in automation and tool
              development. With excellent communication skills and a passion for
              continuous learning, I am confident in my ability to quickly adapt
              to new environments and thrive in a team setting. I am excited to
              bring my enthusiasm and fresh perspective to a challenging role
              and make a positive impact on the company.
            </p>
          </div>
        </div>
      </div>

      <h2 className="Website-Headers">EDUCATION</h2>
      <div className="education-container Containers">
        <div className="eduction-details">
          <ul className="edu-list">
            <li className="edu-item">
              <h3 className="edu-titles">
                B.Tech in Electronics and communication Engineering
              </h3>
              <h4 style={{ color: "#1e90ff" }}>Course - ECE</h4>
              <p className="edu-info">
                Marri Laxman Reddy Institute Of Technology and Management,
                Dundigal, Hyderabad
                <br />
                CGPA : 8.01 <br />
                Aug 2019 - Apr 2023
              </p>
            </li>

            <li className="edu-item">
              <h3 className="edu-titles">Intermediate</h3>
              <h4 style={{ color: "#1e90ff" }}>Course - MPC</h4>
              <p className="edu-info">
                Narayana Junior College, Hyderabad
                <br />
                CGPA : 8.8 <br />
                Jun 2017 - Mar 2019
              </p>
            </li>

            <li className="edu-item">
              <h3 className="edu-titles">High School</h3>
              <p className="edu-info">
                Pragati Vidya Niketan High School, Hyderabad
                <br />
                CGPA : 8.0
                <br />
                Jul 2016 - Apr 2017
              </p>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="Website-Headers">PROJECTS</h2>
      <div className="Containers projects-main-container">
        <div className="projects-container">
          {projects_data ? (
            projects_data
              .slice(0, 2)
              .map((project, index) => (
                <ProjectsDiv key={index} index={index} each_project={project} />
              ))
          ) : (
            <p>Loading Data...</p>
          )}
          <Link to="/projects" className="more-anchor">
            More projects...
          </Link>
        </div>
      </div>

      <h2 className="Website-Headers">SKILLS</h2>
      <div className="skills-container Containers">
        <div className="skills">
          <div className="skill">
            <img
              src="/images/skills/python.jpeg"
              alt="python"
              style={{ height: "120px", width: "100px" }}
              className="skill-images"
            />
          </div>

          <div className="skill">
            <img
              src="/images/skills/java.png"
              alt="java"
              style={{ height: "120px", width: "120px" }}
              className="skill-images"
            />
          </div>

          <div className="skill">
            <img
              src="/images/skills/postgres.png"
              alt="sql"
              style={{ height: "100px", width: "100px" }}
              className="skill-images"
            />
          </div>

          <div className="skill">
            <img
              src="/images/skills/html.png"
              alt="html"
              style={{ height: "100px", width: "100px" }}
              className="skill-images"
            />
          </div>

          <div className="skill">
            <img
              src="/images/skills/css.png"
              alt="css"
              style={{ height: "100px", width: "80px" }}
              className="skill-images"
            />
          </div>

          <div className="skill">
            <img
              src="/images/skills/javascript.png"
              alt="javascript"
              style={{ height: "100px", width: "100px" }}
              className="skill-images"
            />
          </div>

          <div className="skill">
            <img
              src="/images/skills/nodejs.png"
              alt="nodejs"
              style={{ height: "100px", width: "100px" }}
              className="skill-images"
            />
          </div>

          <div className="skill">
            <img
              src="/images/skills/expressjs.png"
              alt="expressjs"
              style={{ height: "100px", width: "160px" }}
              className="skill-images"
            />
          </div>

          <div className="skill">
            <img
              src="/images/skills/react.png"
              alt="react"
              style={{ height: "100px", width: "90px" }}
              className="skill-images"
            />
          </div>

          <div className="skill">
            <img
              src="/images/skills/git.png"
              alt="git"
              style={{ height: "100px", width: "100px" }}
              className="skill-images"
            />
          </div>
        </div>
      </div>

      <h2 className="Website-Headers">FIND ME HERE</h2>
      <div className="find-me-container Containers">
        <div>
          <a href="mailto: adarsheluri143@gmai.com">
            <img
              src="/images/find_me/gmail.png"
              alt="gmail"
              style={{ height: "70px", width: "100px" }}
            />
          </a>
        </div>

        <div>
          <a href="https://www.linkedin.com/in/eluri-adarsh-bb089522a/">
            <img
              src="/images/find_me/linkedin.png"
              alt="linkedin"
              style={{ height: "70px", width: "70px" }}
            />
          </a>
        </div>

        <div>
          <a href="https://www.instagram.com/adarsheluri/">
            <img
              src="/images/find_me/instagram.webp"
              alt="instagram"
              style={{ height: "70px", width: "70px" }}
            />
          </a>
        </div>

        <div>
          <a href="https://www.facebook.com/adarsh.eluri.7">
            <img
              src="/images/find_me/facebook.png"
              alt="facebook"
              style={{ height: "70px", width: "70px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;
