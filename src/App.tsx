import React from "react";

import "./App.css";
import { windows } from "./windows";
import Windows from "./components/Windows";

const App = () => {
  return (
    <div className="app">
      <Windows windows={windows} taskbar={true} grid={5} />
    </div>
  );
};

export default App;
