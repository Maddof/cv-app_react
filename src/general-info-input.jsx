/* eslint-disable react/prop-types */

function GeneralInfoInput({ setName, setEmail, setPhone }) {
  // Receive setName as a prop
  const handleSubmit = (e) => {
    e.preventDefault();
    setName(document.getElementById("name").value); // Update the name state in the parent
    setEmail(document.getElementById("email").value);
    setPhone(document.getElementById("phone").value);
  };

  return (
    <div className="input-wrapper">
      <h2>General info input:</h2>
      <form method="post" className="generalInfoForm" onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="input-block">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="input-block">
          <label htmlFor="phone">Phone: </label>
          <input type="tel" name="phone" id="phone" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export { GeneralInfoInput };
