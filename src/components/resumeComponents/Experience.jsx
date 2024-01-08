import React from "react";
import "./Experience.css";

const Experience = ({ data }) => {
  return (
    <div>
      <div className="experienceNameCity">
        <h3>{data.companyName}</h3>
        <i>{data.city}</i>
      </div>
      <div className="experiencePositionDate">
        <p>{data.jobTitle}</p>
        <p>
          {data.startDate} - {data.endDate}
        </p>
      </div>
      <div className="experienceDescription">
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default Experience;
