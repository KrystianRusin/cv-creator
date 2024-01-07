import React from "react";
import Personal from "../components/resumeComponents/Personal";
import Education from "../components/resumeComponents/Education";
import Experience from "../components/resumeComponents/Experience";
import "./Resume.css";

const Resume = ({ userData }) => {
  return (
    <div className="resumeContainer">
      <Personal userData={userData} />
      <Education userData={userData} />
      <Experience userData={userData} />
    </div>
  );
};

export default Resume;
