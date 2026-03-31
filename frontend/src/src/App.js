import React from "react";
import Alerts from "./components/Alerts";
import Vehicles from "./components/Vehicles";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>🚗 Real-Time Alert Dashboard</h1>

      <div className="grid">
        <Vehicles />
        <Alerts />
      </div>
    </div>
  );
}

export default App;
