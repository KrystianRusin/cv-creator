import React, { useState } from "react";

const PersonalInput = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="personalInputCard" onClick={toggleFormVisibility}>
      <h2>Personal Details</h2>
      {isFormVisible && (
        <form>
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
