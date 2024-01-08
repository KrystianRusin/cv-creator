import React, { useState, useRef, useEffect } from "react";
import "./PersonalInput.css";
import PersonIcon from "@mui/icons-material/Person";

const PersonalInput = ({ onUserInput, userData }) => {
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
      <h2 className="personalInput__card" onClick={toggleFormVisibility}>
        <PersonIcon fontSize="large" />
        Personal Details
      </h2>
      {isFormVisible && (
        <form ref={formElement} className="form">
          <div className="inputContainer">
            <label>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={userData.personal.fullName}
                className="text__input"
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={userData.personal.email}
                className="text__input"
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              <input
                type="phone"
                name="phone"
                value={userData.personal.phone}
                placeholder="Phone Number"
                className="text__input"
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              <input
                type="text"
                name="address"
                value={userData.personal.address}
                placeholder="City"
                className="text__input"
                onChange={handleChange}
              />
            </label>
          </div>
        </form>
      )}
    </div>
  );
};

export default PersonalInput;
