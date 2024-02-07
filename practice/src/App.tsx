import "./App.css";
import Button from "./components/Button";
import Greet from "./components/Greet";
import Header from "./components/Header";
import HeaderParent from "./components/HeaderParent";
import Input from "./components/Input";
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
      <Greet name={"Raghuveer"} messageCount={20} isLoggedIn={true} />
      <Greet name={"Raghuveer"} isLoggedIn={true} />
      {/*<Name name={name} />
      <Persons persons={persons} />
      <Status status="loading" />
      <Status status="error" />
      <Status status="success" /> */}
      <Header>Welcome to my website</Header>
      <HeaderParent>
        <Header>Welcome to my website</Header>
      </HeaderParent>
      <Button handleClick={(e) => console.log("Clicked" + e.target)} />
      <Input value="Test" handleChange={(e) => console.log("input event", e)} />
    </div>
  );
}

export default App;
