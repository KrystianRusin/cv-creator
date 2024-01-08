import React from "react";
import "./Skills.css";

const Skills = ({ data }) => {
  return (
    <div>
      <div className="skillsContainer">
        <h3>{data.skillSet}: </h3>
        <i>{data.skillList}</i>
      </div>
    </div>
  );
};

export default Skills;
