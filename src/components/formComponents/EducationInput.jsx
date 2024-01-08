import React, { useState, useRef, useEffect } from "react";
import WorkIcon from "@mui/icons-material/Work";
import AddIcon from "@mui/icons-material/Add";
import EducationCard from "./EducationCard";
import "./EducationInput.css";

const EducationInput = ({
  onUserInput,
  userData,
  educations,
  setEducations,
  deleteEducation,
}) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const formElement = useRef(null);
  const buttonElement = useRef(null);

  const toggleFormVisibility = () => {
    if (isFormVisible && formElement.current) {
      formElement.current.style.maxHeight = "0";
      setTimeout(() => {
        setIsFormVisible(false);
      }, 500); // Delay setting isFormVisible to false
    } else {
      setIsFormVisible(true);
    }
  };

  const toggleButtonVisibility = () => {
    if (isButtonVisible && buttonElement.current) {
      buttonElement.current.style.maxHeight = "0";
      setTimeout(() => {
        setIsButtonVisible(false);
      }, 500); // Delay setting isFormVisible to false
      toggleFormVisibility();
    } else {
      setIsButtonVisible(true);
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

  useEffect(() => {
    if (buttonElement.current) {
      buttonElement.current.style.maxHeight = isButtonVisible
        ? `${buttonElement.current.scrollHeight}px`
        : "0";
    }
  }, [isButtonVisible]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    setEducations((prevEducations) => [...prevEducations, data]);
  };

  return (
    <div>
      <h2 className="educationInput__card" onClick={toggleButtonVisibility}>
        <WorkIcon fontSize="large" />
        Education
      </h2>
      {educations.map((education, index) => (
        <EducationCard
          key={index}
          data={education}
          onDelete={() => deleteEducation(index)}
        />
      ))}
      {isButtonVisible && (
        <button
          ref={buttonElement}
          onClick={toggleFormVisibility}
          className="button"
        >
          Add Education
        </button>
      )}
      {isFormVisible && (
        <form ref={formElement} className="form" onSubmit={handleSubmit}>
          <div className="inputContainer">
            <label>
              <input
                type="text"
                name="schoolName"
                placeholder="School Name"
                value={userData.education.schoolName}
                className="text__input"
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
                value={userData.education.cityName}
                className="text__input"
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              <input
                type="text"
                name="degree"
                placeholder="Degree"
                value={userData.education.degree}
                className="text__input"
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              <input
                type="text"
                name="major"
                placeholder="Major"
                value={userData.education.major}
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
                value={
                  new Date(userData.education.startDate)
                    .toISOString()
                    .split("T")[0]
                }
                className="text__input"
                onChange={handleChange}
              />
            </label>
            <label>
              <input
                type="date"
                name="endDate"
                placeholder="End Date (Leave empty if current)"
                value={
                  new Date(userData.education.endDate)
                    .toISOString()
                    .split("T")[0]
                }
                className="text__input"
                onChange={handleChange}
              />
            </label>
          </div>
          <button type="submit">Add</button>
          <div></div>
        </form>
      )}
    </div>
  );
};

export default EducationInput;
