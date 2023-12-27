import React from "react";
import Personal from "../components/Personal";
import Education from "../components/Education";
import Experience from "../components/Experience";

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
