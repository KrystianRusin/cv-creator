import React from "react";
import "./Education.css";

const Education = ({ userData }) => {
  return (
    <div className="educationCard">
      <div className="headerContainer">
        <h2>Education</h2>
        <hr />
      </div>

      <div className="educationNameCity">
        <h3>{userData.education.schoolName}</h3>
        <i>{userData.education.cityName}</i>
      </div>
      <div className="educationMajorDate">
        <p>
          {userData.education.degree} in {userData.education.major}
        </p>
        <p>
          {userData.education.startDate} - {userData.education.endDate}
        </p>
      </div>
    </div>
  );
};

export default Education;
