import React from "react";
import "./Card.css";
import DeleteIcon from "@mui/icons-material/Delete";

const ExperienceCard = ({ data, onDelete }) => {
  return (
    <div className="cardContainer">
      <h5>
        {data.jobTitle} at {data.companyName}
      </h5>
      <button className="deleteButton" onClick={onDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default ExperienceCard;
