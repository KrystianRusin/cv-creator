import { useState } from "react";
import Sidebar from "./containers/Sidebar";
import Resume from "./containers/Resume";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="content">
      <Sidebar />
      <Resume />
    </div>
  );
}

export default App;
