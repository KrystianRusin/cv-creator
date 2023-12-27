import React from "react";
import PersonalInput from "../components/PersonalInput";
import EducationInput from "../components/EducationInput";
import ExperienceInput from "../components/ExperienceInput";

const Sidebar = () => {
  return (
    <div className="sidebarContent">
      <h1>Sidebar</h1>
      <PersonalInput />
      <EducationInput />
      <ExperienceInput />
    </div>
  );
};

export default Sidebar;
