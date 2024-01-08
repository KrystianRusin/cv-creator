import React from "react";
import "./Personal.css";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import VerticalLine from "../helper/VerticalLine";

const Personal = ({ userData }) => {
  return (
    <div className="personalSection">
      <h2>
        <span className="firstName">{userData.personal.firstName}</span>
        <span className="lastName">{userData.personal.lastName}</span>
      </h2>
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
          <VerticalLine />
        </p>
        <p>
          <GitHubIcon />
          <a href={userData.personal.github}>{userData.personal.github}</a>
        </p>
      </div>
    </div>
  );
};

export default Personal;
