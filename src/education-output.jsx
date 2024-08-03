/* eslint-disable react/prop-types */

function EducationOutput({ educations, onDelete, onEdit }) {
  // Named function to handle click event
  function handleDelete(id) {
    return function () {
      onDelete(id);
    };
  }
  function handleEdit(education) {
    return function () {
      onEdit(education);
    };
  }
  return (
    <div>
      <h2>Educations</h2>
      <ul>
        {educations.map((education) => (
          <li key={education.id} className="education">
            <strong>School:</strong> {education.schoolName},{" "}
            <strong>Degree:</strong> {education.degree}, <strong>Date:</strong>{" "}
            {education.date}
            <button
              className="edit-btn"
              id={education.id}
              onClick={handleEdit(education)}
            >
              Edit
            </button>
            <button
              className="delete-btn"
              id={education.id}
              onClick={handleDelete(education.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { EducationOutput };
