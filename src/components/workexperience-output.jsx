/* eslint-disable react/prop-types */

function JobOutput({ jobs, onDelete, onEdit }) {
  // Named function to handle click event
  function handleDelete(id) {
    return function () {
      onDelete(id);
    };
  }
  function handleEdit(job) {
    return function () {
      onEdit(job);
    };
  }
  return (
    <div>
      <h2>Work experience</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id} className="job">
            <strong>Woork place:</strong> {job.companyName},{" "}
            <strong>Title:</strong> {job.title},
            <strong>Job responsibilites:</strong> {job.duty},{" "}
            <strong>Date from:</strong> {job.dateFrom}
            <strong>Date to:</strong> {job.dateTo}
            <button className="edit-btn" id={job.id} onClick={handleEdit(job)}>
              Edit
            </button>
            <button
              className="delete-btn"
              id={job.id}
              onClick={handleDelete(job.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { JobOutput };
