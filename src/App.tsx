import React from "react";

import "./App.scss";
import { windows } from "./windows";
import Windows from "./components/Windows";
import WindowsProvider from "./components/WindowsProvider";
import iconMinimize from "./assets/images/icon-minimize.png";
import iconMaximize from "./assets/images/icon-maximize.png";
import iconResize from "./assets/images/icon-resize.png";

const App = () => {
  return (
    <div className="app">
      <WindowsProvider>
        <Windows
          windows={windows}
          taskbar={true}
          grid={5}
          gridsGap={10}
          gridsCount={12}
          styles={{
            header: {
              size: "2.4rem",
              color: "#bdbdbd",
              background: "#424242",
            },
            body: {
              color: "#9e9e9e",
              background: "#212121",
            },
            icons: {
              maximize: `url(${iconMaximize})`,
              minimize: `url(${iconMinimize})`,
              resize: `url(${iconResize})`,
            },
            borderRadius: "1rem",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
          }}
        />
      </WindowsProvider>
    </div>
  );
};

export default App;
