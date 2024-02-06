import "./App.css";
import Greet from "./components/Greet";
import Header from "./components/Header";
import Name from "./components/Name";
import Persons from "./components/Persons";
import Status from "./components/Status";

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
      {/* <Greet name={"Raghuveer"} messageCount={20} isLoggedIn={true} />
      <Name name={name} />
      <Persons persons={persons} />
      <Status status="loading" />
      <Status status="error" />
      <Status status="success" /> */}
      <Header>Welcome to my website</Header>
    </div>
  );
}

export default App;
