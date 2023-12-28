import React from "react";
import Personal from "../components/resumeComponents/Personal";
import Education from "../components/resumeComponents/Education";
import Experience from "../components/resumeComponents/Experience";

const Resume = () => {
  return (
    <div className="resumeContainer">
      <Personal />
      <Education />
      <Experience />
    </div>
  );
};

export default Resume;
