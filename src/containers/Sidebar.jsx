import React from "react";
import PersonalInput from "../components/PersonalInput";
import EducationInput from "../components/EducationInput";
import ExperienceInput from "../components/ExperienceInput";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar__content">
      <PersonalInput />
      <EducationInput />
      <ExperienceInput />
    </div>
  );
};

export default Sidebar;
