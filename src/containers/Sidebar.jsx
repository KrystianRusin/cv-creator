import React from "react";
import PersonalInput from "../components/formComponents/PersonalInput";
import EducationInput from "../components/formComponents/EducationInput";
import ExperienceInput from "../components/formComponents/ExperienceInput";
import "./Sidebar.css";

const Sidebar = ({
  onUserInput,
  userData,
  experiences,
  setExperiences,
  deleteExperience,
  educations,
  setEducations,
  deleteEducation,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onUserInput(e);
  };
  return (
    <div className="sidebar__content">
      <div className="form__container">
        <div className="form__title">
          <PersonalInput onUserInput={handleSubmit} userData={userData} />
        </div>
      </div>
      <div className="form__container">
        <div className="form__title">
          <EducationInput
            onUserInput={handleSubmit}
            userData={userData}
            educations={educations}
            setEducations={setEducations}
            deleteEducation={deleteEducation}
          />
        </div>
      </div>
      <div className="form__container">
        <div className="form__title">
          <ExperienceInput
            onUserInput={handleSubmit}
            userData={userData}
            experiences={experiences}
            setExperiences={setExperiences}
            deleteExperience={deleteExperience}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
