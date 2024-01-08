import React from "react";
import "./EducationCard.css";

const ExperienceCard = ({ data, onDelete }) => {
  return (
    <div className="cardContainer">
      <h5>
        {data.degree} at {data.schoolName}
      </h5>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default ExperienceCard;
