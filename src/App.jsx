import { useState, useEffect } from "react";
import Sidebar from "./containers/Sidebar";
import Resume from "./containers/Resume";
import "./App.css";

function App() {
  const [userData, setUserData] = useState({
    personal: {
      fullName: "John Doe",
      email: "johndoe@gmail.com",
      phone: "123-456-7890",
      city: "New York",
      state: "NY",
    },
    education: {
      schoolName: "Harvard University",
      cityName: "Cambridge, MA",
      startDate: "08-01-2015",
      endDate: "04-01-2019",
      degree: "Bachelors of Science",
      major: "Computer Science",
    },
    experience: {
      companyName: "Software Company",
      city: "San Francisco, CA",
      startDate: "01-01-2020",
      endDate: "08-01-2021",
      jobTitle: "Software Engineer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  });

  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    setExperiences([userData.experience]);
    setEducations([userData.education]);
  }, []);

  const deleteExperience = (index) => {
    setExperiences((prevExperiences) =>
      prevExperiences.filter((_, i) => i !== index)
    );
  };

  const deleteEducation = (index) => {
    setEducations((prevEducations) =>
      prevEducations.filter((_, i) => i !== index)
    );
  };

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      personal: {
        ...prevState.personal,
        [name]: value,
      },
      experience: {
        ...prevState.experience,
        [name]: value,
      },
      education: {
        ...prevState.education,
        [name]: value,
      },
    }));
  };

  return (
    <div className="content">
      <Sidebar
        onUserInput={handleUserInput}
        userData={userData}
        experiences={experiences}
        setExperiences={setExperiences}
        deleteExperience={deleteExperience}
        educations={educations}
        setEducations={setEducations}
        deleteEducation={deleteEducation}
      />
      <Resume
        userData={userData}
        experiences={experiences}
        educations={educations}
      />
    </div>
  );
}

export default App;
