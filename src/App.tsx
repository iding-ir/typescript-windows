import React from "react";

import "./App.css";
import "./styles/resizable.scss";
import "./components/Windows.scss";
import { windows } from "./windows";
import Windows from "./components/Windows";

const App = () => {
  return (
    <div className="app">
      <Windows windows={windows} grid={1} />
    </div>
  );
};

export default App;
