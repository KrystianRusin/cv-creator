import React, { useState, useRef, useEffect } from "react";
import "./EducationInput.css";

const EducationInput = () => {
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
                placeholder="Company Name"
                className="text__input"
              />
            </label>
          </div>
          <div>
            <label>
              <input type="text" placeholder="City" className="text__input" />
            </label>
          </div>
          <div>
            <label>
              <input
                type="date"
                placeholder="Start Date"
                className="text__input"
              />
            </label>
            <label>
              <input
                type="date"
                placeholder="End Date (Leave empty if current)"
                className="text__input"
              />
            </label>
          </div>
        </form>
      )}
    </div>
  );
};

export default EducationInput;
