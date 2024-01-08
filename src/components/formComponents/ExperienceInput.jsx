import React, { useState, useRef, useEffect } from "react";
import WorkIcon from "@mui/icons-material/Work";
import AddIcon from "@mui/icons-material/Add";
import ExperienceCard from "./ExperienceCard";
import "./ExperienceInput.css";

const ExperienceInput = ({
  onUserInput,
  userData,
  experiences,
  setExperiences,
  deleteExperience,
}) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const formElement = useRef(null);
  const buttonElement = useRef(null);

  const toggleFormVisibility = () => {
    if (isFormVisible && formElement.current) {
      formElement.current.style.maxHeight = "0";
      setTimeout(() => setIsFormVisible(false), 500); // Delay setting isFormVisible to false
    } else {
      setIsFormVisible(true);
    }
  };

  const toggleButtonVisibility = () => {
    if (isButtonVisible && buttonElement.current) {
      buttonElement.current.style.maxHeight = "0";
      setTimeout(() => setIsButtonVisible(false), 500);
      toggleFormVisibility(); // Delay setting isFormVisible to false
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

    setExperiences((prevExperiences) => [...prevExperiences, data]);
  };

  return (
    <div>
      <h2 className="experienceInput__card" onClick={toggleButtonVisibility}>
        <WorkIcon fontSize="large" />
        Experience
      </h2>
      {experiences.map((experience, index) => (
        <ExperienceCard
          key={index}
          data={experience}
          onDelete={() => deleteExperience(index)}
        />
      ))}
      {isButtonVisible && (
        <button
          ref={buttonElement}
          onClick={toggleFormVisibility}
          className="button"
        >
          Add Experience
        </button>
      )}
      {isFormVisible && (
        <form ref={formElement} className="form" onSubmit={handleSubmit}>
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
                value={
                  new Date(userData.experience.startDate)
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
                  new Date(userData.experience.endDate)
                    .toISOString()
                    .split("T")[0]
                }
                className="text__input"
                onChange={handleChange}
              />
            </label>
            <label>
              <textarea
                rows={5}
                cols={35}
                name="description"
                placeholder="Role Description"
                value={userData.experience.description}
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

export default ExperienceInput;
