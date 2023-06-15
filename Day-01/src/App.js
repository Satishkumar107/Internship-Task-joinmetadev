import { useState } from "react";
import "./App.css";
import Details from "./components/Details";
import TipTap from "./components/TipTap";


function App() {
  const [description, setDescription] = useState("");

  return (
    <div className="App">
      
      <TipTap setDescription={setDescription} />
      <Details description={description} />
    </div>
  );
}

export default App;