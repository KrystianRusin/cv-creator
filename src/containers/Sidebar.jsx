import React from "react";
import PersonalInput from "../components/formComponents/PersonalInput";
import EducationInput from "../components/formComponents/EducationInput";
import ExperienceInput from "../components/formComponents/ExperienceInput";
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
