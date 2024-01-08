import React from "react";
import "./Education.css";

const Education = ({ data }) => {
  return (
    <div className="educationCard">
      <div className="educationNameCity">
        <h3>{data.schoolName}</h3>
        <i>{data.cityName}</i>
      </div>
      <div className="educationMajorDate">
        <p>
          {data.degree} in {data.major}
        </p>
        <p>
          {data.startDate} - {data.endDate}
        </p>
      </div>
    </div>
  );
};

export default Education;
