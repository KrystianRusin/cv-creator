import React from "react";
import Personal from "../components/resumeComponents/Personal";
import Education from "../components/resumeComponents/Education";
import Experience from "../components/resumeComponents/Experience";

const Resume = ({ userData }) => {
  return (
    <div className="resumeContainer">
      <Personal userData={userData} />
      <Education />
      <Experience />
    </div>
  );
};

export default Resume;
