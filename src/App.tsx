import React from "react";

import "./App.css";
import { windows } from "./windows";
import Windows from "./components/Windows";

const App = () => {
  return (
    <div className="app">
      <Windows items={windows} grid={1} />
    </div>
  );
};

export default App;
