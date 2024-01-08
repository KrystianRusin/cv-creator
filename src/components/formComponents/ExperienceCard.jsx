import React from "react";
import "./ExperienceCard.css";

const ExperienceCard = ({ data, onDelete }) => {
  return (
    <div className="cardContainer">
      <h5>
        {data.jobTitle} at {data.companyName}
      </h5>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default ExperienceCard;
