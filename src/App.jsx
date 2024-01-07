import { useState } from "react";
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
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  });

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
      <Sidebar onUserInput={handleUserInput} userData={userData} />
      <Resume userData={userData} />
    </div>
  );
}

export default App;
