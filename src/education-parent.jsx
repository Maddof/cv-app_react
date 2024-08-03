/* To be used if I feel the need to separate out logic from App */

import { useState } from "react";
import { EducationInput } from "./education-input";
import { EducationOutput } from "./education-output";

function EducationParent() {
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
      setNextId(nextId + 1); // Increment the counter after adding a new education.
    }
  };

  const editEducation = (education) => {
    setCurrentEducation(education); // Set the education to be edited
  };

  const deleteEducation = (id) => {
    setEducations(educations.filter((education) => education.id !== id));
  };

  return (
    <div className="education-parent">
      <div className="education-input-wrapper">
        <EducationInput
          addEducation={addEducation}
          currentEducation={currentEducation}
        />
      </div>
      <div className="education-output-wrapper">
        <EducationOutput
          educations={educations}
          onEdit={editEducation}
          onDelete={deleteEducation}
        />
      </div>
    </div>
  );
}

export { EducationParent };
