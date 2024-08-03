/* eslint-disable react/prop-types */

function Header({ name, email, phone }) {
  // Receive name as a prop
  return (
    <div>
      <h2>General info</h2>
      <div>
        <span className="headerTitle">Name: </span>
        <span className="headerInfo name">{name} </span>
        <span className="headerTitle">Email: </span>
        <span className="headerInfo email">{email} </span>
        <span className="headerTitle">Phone: </span>
        <span className="headerInfo">{phone} </span>
      </div>
    </div>
  );
}

export { Header };
