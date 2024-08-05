import { useState } from "react";
import { Header } from "./components/general-info-output";
import { GeneralInfoInput } from "./components/general-info-input";
import { EducationInput } from "./components/education-input";
import { EducationOutput } from "./components/education-output";
import { JobInput } from "./components/workexperience-input";
import { JobOutput } from "./components/workexperience-output";

import "./App.css";

function App() {
  // General info input states
  const [name, setName] = useState("Detectivo Deductivo");
  const [email, setEmail] = useState("deductivo@ded.com");
  const [phone, setPhone] = useState("073-6633200");

  const [infoProvided, updateInfoProvided] = useState(false);

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
      setNextId(nextId + 1); // Increment the counter after adding a new education.
    }
  };

  const editEducation = (education) => {
    setCurrentEducation(education); // Set the education to be edited
  };

  const deleteEducation = (id) => {
    setEducations(educations.filter((education) => education.id !== id));
    if (currentEducation && currentEducation.id == id) {
      setCurrentEducation(null);
    }
  };

  // Job input states
  const [jobs, setJobs] = useState([
    {
      companyName: "My company",
      title: "CEO",
      duty: "I did this and that...",
      dateFrom: "2020-01-01",
      dateTo: "2024-01-01",
      id: 0,
    },
    {
      companyName: "My company 2",
      title: "CEO",
      duty: "I did this and that...",
      dateFrom: "2020-01-01",
      dateTo: "2024-01-01",
      id: 1,
    },
  ]);
  const [currentJob, setCurrentJob] = useState(null); // State to hold the education being edited
  const [nextJobId, setJobNextId] = useState(2); // Initial ID counter

  const addJob = (job) => {
    if (currentJob) {
      // Update existing Job
      setJobs(
        jobs.map((j) =>
          j.id === currentJob.id ? { ...job, id: currentJob.id } : j
        )
      );
      setCurrentJob(null); // Reset after editing
    } else {
      // Add new job
      const newJob = {
        ...job,
        id: nextJobId,
      };
      setJobs([...jobs, newJob]);
      setJobNextId(nextJobId + 1); // Increment the counter after adding a new job.
    }
  };

  const editJob = (job) => {
    console.log(job);
    setCurrentJob(job); // Set the job to be edited
  };

  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
    if (currentJob && currentJob.id === id) {
      setCurrentJob(null); // Reset currentJob if the deleted education was being edited
    }
  };

  return (
    <section className="main-sec">
      <div className="inputs-wrapper">
        <GeneralInfoInput
          setName={setName}
          setEmail={setEmail}
          setPhone={setPhone}
          updateInfoProvided={updateInfoProvided}
          infoProvided={infoProvided}
        />
        <EducationInput
          addEducation={addEducation}
          currentEducation={currentEducation}
        />
        <JobInput addJob={addJob} currentJob={currentJob} />
      </div>

      <div className="outputs-wrapper">
        <h1>MY CV</h1>
        <Header name={name} email={email} phone={phone} />
        <EducationOutput
          educations={educations}
          onEdit={editEducation}
          onDelete={deleteEducation}
        />
        <JobOutput jobs={jobs} onEdit={editJob} onDelete={deleteJob} />
      </div>
    </section>
  );
}

export { App };
