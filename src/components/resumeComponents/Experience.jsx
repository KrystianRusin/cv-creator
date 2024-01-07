import React from "react";
import "./Experience.css";

const Experience = ({ userData }) => {
  return (
    <div>
      <div className="experienceNameCity">
        <h3>{userData.experience.companyName}</h3>
        <i>{userData.experience.city}</i>
      </div>
      <div className="experiencePositionDate">
        <p>{userData.experience.jobTitle}</p>
        <p>
          {userData.experience.startDate} - {userData.experience.endDate}
        </p>
      </div>
      <div className="experienceDescription">
        <p>{userData.experience.description}</p>
      </div>
    </div>
  );
};

export default Experience;
