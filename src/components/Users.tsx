import { useEffect, useState } from "react";
import { handleOtherMethodClick } from "../helper";

const Users = () => {
  const [name, setName] = useState("");
  const [btnName, setBtnName] = useState("");

  const handleClickButton = () => {
    setBtnName("Submit");
  };

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLogin(true);
    }, 1000);
  });
  return (
    <div>
      <h1>Users___</h1>
      <p>This is the users list page.</p>
      <ul>
        <li>name 1</li>
        <li>name 2</li>
        <li>name 3</li>
      </ul>

      <input
        type="text"
        placeholder="Enter username"
        value={name}
        disabled
        onChange={(e) => setName(e.target.value + " " + "Gautam")}
      />
      <br />
      <br />
      <br />
      <button onClick={handleClickButton} element-id="btn1" title="Click Me">
        Click Me
      </button>
      <br />
      <br />
      <button onClick={handleOtherMethodClick}>Click Other Method</button>
      <p>{btnName}</p>
      <br />
      <br />
      <br />
      <label htmlFor="isPassed1">Is Passed</label>
      <input type="checkbox" id="isPassed1" className="custom-checkbox" />
      <br />
      <label htmlFor="isPassed2">Is Passed</label>
      <input type="checkbox" id="isPassed2" />
      <br />
      <label htmlFor="isPassed3">Is Passed</label>
      <input type="checkbox" id="isPassed3" />
      <br />
      <br />
      <br />
      <img
        title="image from google"
        className="h-1/2 w-full"
        alt="image"
        src="https://images.pexels.com/photos/808465/pexels-photo-808465.jpeg?cs=srgb&dl=pexels-lastly-808465.jpg&fm=jpg"
      />
      <img
        title="image from google"
        className="h-1/2 w-full"
        alt="image"
        src="https://images.pexels.com/photos/808465/pexels-photo-808465.jpeg?cs=srgb&dl=pexels-lastly-808465.jpg&fm=jpg"
      />
      <br />
      <br />
      <br />
      {isLogin ? <button>Logout</button> : <button>Login</button>}
    </div>
  );
};

export default Users;
