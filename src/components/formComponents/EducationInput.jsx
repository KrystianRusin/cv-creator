import React, { useState, useRef, useEffect } from "react";
import "./EducationInput.css";

const EducationInput = ({ onUserInput, userData }) => {
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
      <h2 className="educationInput__card" onClick={toggleFormVisibility}>
        Education
      </h2>
      {isFormVisible && (
        <form ref={formElement} className="form">
          <div className="inputContainer">
            <label>
              <input
                type="text"
                name="schoolName"
                placeholder="Company Name"
                className="text__input"
                value={userData.education.schoolName}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              <input
                type="text"
                name="cityName"
                placeholder="City"
                className="text__input"
                value={userData.education.cityName}
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
                className="text__input"
                value={
                  new Date(userData.education.startDate)
                    .toISOString()
                    .split("T")[0]
                }
                onChange={handleChange}
              />
            </label>
            <label>
              <input
                type="date"
                name="endDate"
                placeholder="End Date (Leave empty if current)"
                className="text__input"
                value={
                  new Date(userData.education.endDate)
                    .toISOString()
                    .split("T")[0]
                }
                onChange={handleChange}
              />
            </label>
            <label>
              <input
                type="text"
                name="degree"
                placeholder="Degree"
                className="text__input"
                value={userData.education.degree}
                onChange={handleChange}
              />
            </label>
            <label>
              <input
                type="text"
                name="major"
                placeholder="Major"
                className="text__input"
                value={userData.education.major}
                onChange={handleChange}
              />
            </label>
          </div>
        </form>
      )}
    </div>
  );
};

export default EducationInput;
