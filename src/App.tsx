import { useEffect, useState } from "react";
import "./App.css";

// import ClassComp from "./components/ClassComp";
import { Counter2 } from "./components/Counter2";

// import Users from "./components/Users";

interface User {
  id: number;
  name: string;
  // add other fields if needed
}

function App() {
  const [mockData, setMockData] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  const getUsersMockData = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    if (result.ok) {
      const data = await result.json();
      setMockData([...data]);
    } else {
      setError("Failed to fetch users data");
    }
  };

  useEffect(() => {
    getUsersMockData();
  }, []);
  return (
    <div className="space-y-4">
      <h1 className="text-3xl bg-red-700 font-bold underline">
        React 19 with Tailwind CSS v4
      </h1>
      {error && <p>{error}</p>}
      {mockData.map((user) => (
        <div key={user.id} className="p-4 border rounded shadow">
          <h2 className="text-xl font-semibold">{user.name}</h2>
        </div>
      ))}
      {/* <Users tilte="This is the list of Users page with their details data" />
      <ClassComp /> */}
      <Counter2 />
    </div>
  );
}

export default App;
