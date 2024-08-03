/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

function JobInput({ addJob, currentJob }) {
  const [companyName, setCompanyName] = useState("");
  const [title, setTitle] = useState("");
  const [duty, setDuty] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  // View comment in education-input component for
  // explanation of useEffect hook usage

  useEffect(() => {
    if (currentJob) {
      setCompanyName(currentJob.companyName);
      setTitle(currentJob.title);
      setDuty(currentJob.duty);
      setDateFrom(currentJob.dateFrom);
      setDateTo(currentJob.dateTo);
    }
  }, [currentJob]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new job object
    const newJob = {
      companyName,
      title,
      duty,
      dateFrom,
      dateTo,
    };

    // Pass the new job back to the parent component
    addJob(newJob);

    // Clear the input fields after submission
    setCompanyName("");
    setTitle("");
    setDuty("");
    setDateFrom("");
    setDateTo("");
  };

  return (
    <div className="input-wrapper">
      <h2>Work experience input:</h2>
      <form method="post" className="job-form" onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="companyName">Company name: </label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)} // Update the state on each change
          />
        </div>
        <div className="input-block">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="duty">Work duties: </label>
          <input
            type="text"
            name="duty"
            id="duty"
            value={duty}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="datefrom-job">Date from: </label>
          <input
            type="date"
            name="datefrom-job"
            id="datefrom-job"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="dateto-job">Date to: </label>
          <input
            type="date"
            name="dateto-job"
            id="dateto-job"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
          />
        </div>
        <button type="submit">{currentJob ? "Update" : "Submit"}</button>
      </form>
    </div>
  );
}

export { JobInput };
