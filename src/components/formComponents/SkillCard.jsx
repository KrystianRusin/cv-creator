import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Card.css";

const SkillCard = ({ data, onDelete }) => {
  return (
    <div className="cardContainer">
      <h5>{data.skillSet}</h5>
      <button className="deleteButton" onClick={onDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default SkillCard;
