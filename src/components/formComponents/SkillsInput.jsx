import React, { useState, useRef, useEffect } from "react";
import WorkIcon from "@mui/icons-material/Work";
import AddIcon from "@mui/icons-material/Add";
import SkillCard from "./SkillCard";
import "./SkillCard";

const ExperienceInput = ({
  onUserInput,
  userData,
  skills,
  setSkills,
  deleteSkills,
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

    setSkills((prevSkills) => [...prevSkills, data]);
  };

  return (
    <div>
      <h2 className="skillInput__card" onClick={toggleButtonVisibility}>
        <WorkIcon fontSize="large" />
        Skills
      </h2>
      {skills.map((skill, index) => (
        <SkillCard
          key={index}
          data={skill}
          onDelete={() => deleteSkills(index)}
        />
      ))}
      {isButtonVisible && (
        <button
          ref={buttonElement}
          onClick={toggleFormVisibility}
          className="button"
        >
          Add Skill Set
        </button>
      )}
      {isFormVisible && (
        <form ref={formElement} className="form" onSubmit={handleSubmit}>
          <div className="inputContainer">
            <label>
              <input
                type="text"
                name="skillSet"
                placeholder="Skill Set Name"
                value={userData.skills.skillSet}
                className="text__input"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="inputContainer">
            <label>
              <input
                type="text"
                name="skillList"
                placeholder="Skill List"
                value={userData.skills.skillList}
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
