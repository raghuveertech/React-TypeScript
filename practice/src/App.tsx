import "./App.css";
import Greet from "./components/Greet";
import Name from "./components/Name";
import Persons from "./components/Persons";

function App() {
  const name = {
    firstName: "Raghuveer",
    lastName: "Panchagnula",
  };

  const persons = [
    {
      firstName: "Peter",
      lastName: "Parker",
    },
    {
      firstName: "Tony",
      lastName: "Stark",
    },
    {
      firstName: "Steve",
      lastName: "Rogers",
    },
  ];

  return (
    <div className="App">
      <Greet name={"Raghuveer"} messageCount={20} isLoggedIn={true} />
      <Name name={name} />
      <Persons persons={persons} />
    </div>
  );
}

export default App;
