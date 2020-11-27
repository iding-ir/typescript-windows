import React from "react";

import "./App.css";
import { windows } from "./windows";
import Windows from "./components/Windows";
import iconMinimize from "./assets/images/icon-minimize.png";
import iconMaximize from "./assets/images/icon-maximize.png";
import iconResize from "./assets/images/icon-resize.png";

const App = () => {
  return (
    <div className="app">
      <Windows
        windows={windows}
        taskbar={true}
        grid={5}
        gridsGap={10}
        gridsCount={12}
        styles={{
          borderRadius: "1rem",
          headerSize: "2.4rem",
          headerColor: "#bdbdbd",
          headerBackground: "#424242",
          bodyColor: "#9e9e9e",
          bodyBackground: "#212121",
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
          IconMaximize: `url(${iconMaximize})`,
          IconMinimize: `url(${iconMinimize})`,
          IconResize: `url(${iconResize})`,
        }}
      />
    </div>
  );
};

export default App;
