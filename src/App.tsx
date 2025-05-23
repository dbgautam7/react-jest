import "./App.css";
import ClassComp from "./components/ClassComp";
import Users from "./components/Users";

function App() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl bg-red-700 font-bold underline">
        React 19 with Tailwind CSS v4
      </h1>
      <Users tilte="This is the list of Users page with their details data" />
      <ClassComp />
    </div>
  );
}

export default App;
