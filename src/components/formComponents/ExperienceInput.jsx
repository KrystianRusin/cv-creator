import React, { useState, useRef, useEffect } from "react";
import "./ExperienceInput.css";

const ExperienceInput = ({ onUserInput, userData }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const formElement = useRef(null);

  const toggleFormVisibility = () => {
    if (isFormVisible && formElement.current) {
      formElement.current.style.maxHeight = "0";
      setTimeout(() => setIsFormVisible(false), 500); // Delay setting isFormVisible to false
    } else {
      setIsFormVisible(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    onUserInput(e);
  };

  useEffect(() => {
    if (formElement.current) {
      formElement.current.style.maxHeight = isFormVisible
        ? `${formElement.current.scrollHeight}px`
        : "0";
    }
  }, [isFormVisible]);

  return (
    <div>
      <h2 className="experienceInput__card" onClick={toggleFormVisibility}>
        Experience
      </h2>
      {isFormVisible && (
        <form ref={formElement} className="form">
          <div className="inputContainer">
            <label>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={userData.experience.companyName}
                className="text__input"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="inputContainer">
            <label>
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                value={userData.experience.jobTitle}
                className="text__input"
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={userData.experience.city}
                className="text__input"
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              <input
                type="date"
                name="startDate"
                placeholder="Start Date"
                value={userData.experience.startDate}
                className="text__input"
                onChange={handleChange}
              />
            </label>
            <label>
              <input
                type="date"
                name="endDate"
                placeholder="End Date (Leave empty if current)"
                value={userData.experience.endDate}
                className="text__input"
                onChange={handleChange}
              />
            </label>
          </div>
          <div></div>
        </form>
      )}
    </div>
  );
};

export default ExperienceInput;
