import React from "react";

import "./App.scss";
import Window from "./components/Window";
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
        >
          <Window
            id="window1"
            title={<div>Window 1</div>}
            content={
              <div style={{ padding: "1rem" }}>
                Draggable, resizable, minimizable and maximizable.
              </div>
            }
            grids={{ x: 0, y: 0, w: 4, h: 4 }}
          />

          <Window
            id="window2"
            title={<div>Window 2</div>}
            content={
              <div style={{ padding: "1rem" }}>
                With minimum and maximum size.
              </div>
            }
            grids={{ x: 4, y: 0, w: 4, h: 4 }}
            minSize={{ w: 200, h: 100 }}
            maxSize={{ w: 500, h: 300 }}
          />

          <Window
            id="window3"
            title={<div>Window 3</div>}
            content={
              <div style={{ padding: "1rem" }}>
                Bounded to the upper half of the screen.
              </div>
            }
            grids={{ x: 8, y: 0, w: 4, h: 4 }}
            bounds={{ top: 0, left: 0, right: 12, bottom: 6 }}
          />

          <Window
            id="window4"
            title={<div>Window 4</div>}
            content={<div style={{ padding: "1rem" }}>Not draggable.</div>}
            grids={{ x: 0, y: 4, w: 4, h: 4 }}
            draggable={false}
          />

          <Window
            id="window5"
            title={<div>Window 5</div>}
            content={<div style={{ padding: "1rem" }}>Not resizable.</div>}
            grids={{ x: 4, y: 4, w: 4, h: 4 }}
            resizable={false}
          />

          <Window
            id="window6"
            title={<div>Window 6</div>}
            content={<div style={{ padding: "1rem" }}>Not minimizable.</div>}
            grids={{ x: 8, y: 4, w: 4, h: 4 }}
            minimizable={false}
          />

          <Window
            id="window7"
            title={<div>Window 7</div>}
            content={<div style={{ padding: "1rem" }}>Not maximizable.</div>}
            grids={{ x: 0, y: 8, w: 4, h: 4 }}
            maximizable={false}
          />
          
          <Window
            id="window8"
            title={<div>Window 8</div>}
            content={<div style={{ padding: "1rem" }}>Starting minimized.</div>}
            grids={{ x: 4, y: 8, w: 4, h: 4 }}
            startMinimized={true}
          />
        </Windows>
      </WindowsProvider>
    </div>
  );
};

export default App;
