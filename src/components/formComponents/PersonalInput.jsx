import React, { useState, useRef, useEffect } from "react";
import "./PersonalInput.css";

const PersonalInput = () => {
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
    <div className="personalInput__card" onClick={toggleFormVisibility}>
      <h2>Personal Details</h2>
      {isFormVisible && (
        <form ref={formElement} className="form">
          <div className="inputContainer">
            <label>
              <input
                type="text"
                placeholder="Full Name"
                className="text__input"
              />
            </label>
          </div>
          <div>
            <label>
              <input
                type="email"
                placeholder="Email Address"
                className="text__input"
              />
            </label>
          </div>
          <div>
            <label>
              <input
                type="phone"
                placeholder="Phone Number"
                className="text__input"
              />
            </label>
          </div>
          <div>
            <label>
              <input type="text" placeholder="City" className="text__input" />
            </label>
          </div>
        </form>
      )}
    </div>
  );
};

export default PersonalInput;
