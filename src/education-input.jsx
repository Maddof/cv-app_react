/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

function EducationInput({ addEducation, currentEducation }) {
  const [schoolName, setSchoolName] = useState("");
  const [degree, setDegree] = useState("");
  const [date, setDate] = useState("");

  // When the user clicks the "Edit" button in the EducationOutput component,
  // currentEducation is updated in the parent (Layout).
  // React re-renders the EducationInput component, and the useEffect hook runs
  // because currentEducation has changed.
  // This automatically fills the form with the selected education's data,
  // allowing the user to edit it.

  useEffect(() => {
    if (currentEducation) {
      setSchoolName(currentEducation.schoolName);
      setDegree(currentEducation.degree);
      setDate(currentEducation.date);
    }
  }, [currentEducation]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new education object
    const newEducation = {
      schoolName,
      degree,
      date,
    };

    // Pass the new education back to the parent component
    addEducation(newEducation);

    // Clear the input fields after submission
    setSchoolName("");
    setDegree("");
    setDate("");
  };

  return (
    <div className="input-wrapper">
      <h2>Education info input:</h2>
      <form method="post" className="education-form" onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="schoolName">School name: </label>
          <input
            type="text"
            name="schoolName"
            id="schoolName"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)} // Update the state on each change
          />
        </div>
        <div className="input-block">
          <label htmlFor="degree">Degree: </label>
          <input
            type="text"
            name="degree"
            id="degree"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="dateFinish">Date finished: </label>
          <input
            type="date"
            name="dateFinish"
            id="dateFinish"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit">{currentEducation ? "Update" : "Submit"}</button>
      </form>
    </div>
  );
}

export { EducationInput };
