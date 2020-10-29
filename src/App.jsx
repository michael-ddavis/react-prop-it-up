import "./App.css";
import PersonCard from "./components/PersonCard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App App-header">
      <PersonCard
        firstName={"Michael"}
        lastName={"Davis"}
        age={23}
        hairColor={"Brown"}
      />
      <PersonCard
        firstName={"Joe"}
        lastName={"Blow"}
        age={45}
        hairColor={"Blonde"}
      />
      <PersonCard
        firstName={"John"}
        lastName={"Smith"}
        age={32}
        hairColor={"Black"}
      />
      <PersonCard
        firstName={"Maria"}
        lastName={"Smith"}
        age={30}
        hairColor={"Orange"}
      />
    </div>
  );
}

export default App;
