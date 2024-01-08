import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "./SkillCard.css";

const SkillCard = ({ data, onDelete }) => {
  console.log(data);

  return (
    <div className="cardContainer">
      <h5>{data.skillSet}</h5>
      <button onClick={onDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default SkillCard;
