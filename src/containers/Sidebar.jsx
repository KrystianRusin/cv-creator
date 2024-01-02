import React from "react";
import PersonalInput from "../components/formComponents/PersonalInput";
import EducationInput from "../components/formComponents/EducationInput";
import ExperienceInput from "../components/formComponents/ExperienceInput";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar__content">
      <div className="form__container">
        <PersonalInput />
      </div>

      <div className="form__container">
        <EducationInput />
      </div>
      <div className="form__container">
        <ExperienceInput />
      </div>
    </div>
  );
};

export default Sidebar;
