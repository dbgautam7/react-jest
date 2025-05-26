// import React, { useEffect } from "react";
import "./App.css";
import ClassComp from "./components/ClassComp";
import Users from "./components/Users";

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   phone: string;
//   website: string;
//   // add other fields if needed
// }

function App() {
  // const [mockData, setMockData] = React.useState<User[]>([]);

  // // const getUsersMockData = async () => {
  // //   const result = await fetch("https://jsonplaceholder.typicode.com/users");
  // //   if (result.ok) {
  // //     const data = await result.json();
  // //     setMockData([...data]);
  // //   }
  // // };

  // useEffect(() => {
  //   getUsersMockData();
  // }, []);
  return (
    <div className="space-y-4">
      <h1 className="text-3xl bg-red-700 font-bold underline">
        React 19 with Tailwind CSS v4
      </h1>
      {/* {mockData.map((user) => (
        <div key={user.id} className="p-4 border rounded shadow">
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      ))} */}
      <Users tilte="This is the list of Users page with their details data" />
      <ClassComp />
    </div>
  );
}

export default App;
