import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "./EducationCard.css";

const ExperienceCard = ({ data, onDelete }) => {
  return (
    <div className="cardContainer">
      <h5>
        {data.degree} at {data.schoolName}
      </h5>
      <button onClick={onDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default ExperienceCard;
