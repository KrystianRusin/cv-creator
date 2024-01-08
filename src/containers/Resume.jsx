import React from "react";
import Personal from "../components/resumeComponents/Personal";
import Education from "../components/resumeComponents/Education";
import Experience from "../components/resumeComponents/Experience";
import "./Resume.css";

const Resume = ({ userData, experiences, educations }) => {
  return (
    <div className="resumeContainer">
      <Personal userData={userData} />
      <div className="headerContainer">
        <h2>Education</h2>
        <hr />
      </div>
      {educations.map((education, index) => (
        <Education key={index} data={education} />
      ))}
      <div className="headerContainer">
        <h2>Experience</h2>
        <hr />
      </div>
      {experiences.map((experience, index) => (
        <Experience key={index} data={experience} />
      ))}
    </div>
  );
};

export default Resume;
