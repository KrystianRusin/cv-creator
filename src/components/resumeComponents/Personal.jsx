import React from "react";
import "./Personal.css";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import VerticalLine from "../helper/VerticalLine";

const Personal = ({ userData }) => {
  return (
    <div className="personalSection">
      <h2>{userData.personal.fullName}</h2>
      <div className="personalInfo">
        <p>
          <EmailOutlinedIcon />
          {userData.personal.email}
          <VerticalLine />
        </p>
        <p>
          <LocalPhoneOutlinedIcon />
          {userData.personal.phone}
          <VerticalLine />
        </p>
        <p>
          <LocationCityOutlinedIcon />
          {userData.personal.city}, {userData.personal.state}
        </p>
      </div>
    </div>
  );
};

export default Personal;
