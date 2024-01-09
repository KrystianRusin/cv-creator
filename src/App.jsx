import { useState, useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Sidebar from "./containers/Sidebar";
import Resume from "./containers/Resume";
import DownloadIcon from "@mui/icons-material/Download";
import DeleteIcon from "@mui/icons-material/Delete";
import "./App.css";

function App() {
  const [userData, setUserData] = useState({
    personal: {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      phone: "123-456-7890",
      city: "New York",
      state: "NY",
      github: "https://www.github.com/johndoe",
    },
    skills: {
      skillSet: "Languages",
      skillList: "JavaScript, Python, Java, C++",
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
  const [skills, setSkills] = useState([userData.skills]);

  useEffect(() => {
    setExperiences([userData.experience]);
    setEducations([userData.education]);
    setSkills([userData.skills]);
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

  const deleteSkills = (index) => {
    setSkills((prevSkills) => prevSkills.filter((_, i) => i !== index));
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

  const resumeRef = useRef();

  const printDocument = () => {
    const resumeContainer = document.querySelector(".resumeContainer");
    const originalBoxShadow = resumeContainer.style.boxShadow;
    const originalBorder = resumeContainer.style.border;

    // Temporarily remove the box shadow and border
    resumeContainer.style.boxShadow = "none";
    resumeContainer.style.border = "none";

    html2canvas(resumeRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [canvas.width, canvas.height], // Set the dimensions of the PDF page to match the dimensions of the canvas
      });
      const x = (pdf.internal.pageSize.getWidth() - canvas.width) / 2;
      const y = (pdf.internal.pageSize.getHeight() - canvas.height) / 2;

      pdf.addImage(imgData, "JPEG", x, y, canvas.width, canvas.height);
      pdf.save("resume.pdf");

      resumeContainer.style.boxShadow = originalBoxShadow;
      resumeContainer.style.border = originalBorder;
    });
  };

  return (
    <div className="content">
      <div className="sidebar__container">
        <div className="button__container">
          <button className="clear__resume">
            <DeleteIcon />
          </button>
          <button className="download__btn" onClick={printDocument}>
            <DownloadIcon />
          </button>
        </div>
        <Sidebar
          onUserInput={handleUserInput}
          userData={userData}
          experiences={experiences}
          setExperiences={setExperiences}
          deleteExperience={deleteExperience}
          skills={skills}
          setSkills={setSkills}
          deleteSkills={deleteSkills}
          educations={educations}
          setEducations={setEducations}
          deleteEducation={deleteEducation}
        />
      </div>

      <div ref={resumeRef}>
        <Resume
          userData={userData}
          experiences={experiences}
          educations={educations}
          skills={skills}
        />
      </div>
    </div>
  );
}

export default App;
