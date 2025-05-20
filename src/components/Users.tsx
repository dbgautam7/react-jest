import { useState } from "react";

const Users = () => {
  const [name, setName] = useState("");
  const [btnName, setBtnName] = useState("");
  return (
    <div>
      <h1>Users___</h1>
      <p>This is the users list page 11.</p>
      <ul>
        <li>name 1</li>
        <li>name 2</li>
        <li>name 3</li>
      </ul>

      <input
        type="text"
        placeholder="Enter username"
        value={name}
        onChange={(e) => setName(e.target.value + " " + "Gautam")}
      />
      <br />
      <br />
      <br />
      <button onClick={() => setBtnName("Submit")}>Click Me</button>
      <p>{btnName}</p>
      <br />
      <br />
      <br />
      <img
        title="image from google"
        alt="image"
        src="https://images.pexels.com/photos/808465/pexels-photo-808465.jpeg?cs=srgb&dl=pexels-lastly-808465.jpg&fm=jpg"
      />
    </div>
  );
};

export default Users;
