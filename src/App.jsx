import { useState } from "react";
import { Header } from "./cv_header-generalinfo";
import { GeneralInfoInput } from "./general-info-input";
import { EducationInput } from "./education-input";
import { EducationOutput } from "./education-output";

import "./App.css";

function Layout() {
  // General info input states
  const [name, setName] = useState("Detectivo Deductivo");
  const [email, setEmail] = useState("deductivo@ded.com");
  const [phone, setPhone] = useState("073-6633200");

  // Education input states
  const [educations, setEducations] = useState([
    {
      schoolName: "Initial School",
      degree: "Initial Degree",
      date: "2022-01-01",
      id: 0,
    },
  ]);
  const [currentEducation, setCurrentEducation] = useState(null); // State to hold the education being edited
  const [nextId, setNextId] = useState(1); // Initial ID counter

  // The function is updated to check whether the form is in edit mode.
  // If currentEducation is not null,
  // it updates the existing entry instead of adding a new one.
  const addEducation = (education) => {
    if (currentEducation) {
      // Update existing education
      setEducations(
        educations.map((edu) =>
          edu.id === currentEducation.id
            ? { ...education, id: currentEducation.id }
            : edu
        )
      );
      setCurrentEducation(null); // Reset after editing
    } else {
      // Add new education
      const newEducation = {
        ...education,
        id: nextId,
      };
      setEducations([...educations, newEducation]);
      setNextId(nextId + 1);
    }
  };

  const editEducation = (education) => {
    console.log(education);
    setCurrentEducation(education); // Set the education to be edited
  };

  const deleteEducation = (id) => {
    setEducations(educations.filter((education) => education.id !== id));
  };

  console.log(educations);

  return (
    <section className="main-sec">
      <div className="inputs-wrapper">
        <div className="general-info">
          <GeneralInfoInput
            setName={setName}
            setEmail={setEmail}
            setPhone={setPhone}
          />
        </div>
        <div className="education-input-wrapper">
          <EducationInput
            addEducation={addEducation}
            currentEducation={currentEducation}
          />
        </div>
      </div>
      <div className="outputs-wrapper">
        <h1>MY CV</h1>
        <Header name={name} email={email} phone={phone} />
        <EducationOutput
          educations={educations}
          onEdit={editEducation}
          onDelete={deleteEducation}
        />
      </div>
    </section>
  );
}

export { Layout };
