import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Card.css";

const ExperienceCard = ({ data, onDelete }) => {
  return (
    <div className="cardContainer">
      <h5>
        {data.degree} at {data.schoolName}
      </h5>
      <button className="deleteButton" onClick={onDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default ExperienceCard;
