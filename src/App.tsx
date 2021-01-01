import React from "react";

import "./App.scss";
import Window from "./components/Window";
import Windows from "./components/Windows";
import WindowsProvider from "./components/WindowsProvider";

const App = () => {
  return (
    <div className="app">
      <WindowsProvider>
        <Windows taskbar={true} grid={5}>
          <Window
            id="window1"
            grids={{
              mobile: { x: 0, y: 0, w: 12, h: 1 },
              tablet: { x: 0, y: 0, w: 6, h: 3 },
              desktop: { x: 0, y: 0, w: 4, h: 4 },
            }}
            title={<div>Window 1</div>}
          >
            <div style={{ padding: "1rem" }}>
              Draggable, resizable, minimizable and maximizable.
            </div>
          </Window>

          <Window
            id="window2"
            grids={{
              mobile: { x: 0, y: 1, w: 12, h: 1 },
              tablet: { x: 6, y: 0, w: 6, h: 3 },
              desktop: { x: 4, y: 0, w: 4, h: 4 },
            }}
            title={<div>Window 2</div>}
            minSize={{ w: 200, h: 100 }}
            maxSize={{ w: 500, h: 300 }}
          >
            <div style={{ padding: "1rem" }}>
              With minimum and maximum size.
            </div>
          </Window>

          <Window
            id="window3"
            grids={{
              mobile: { x: 0, y: 2, w: 12, h: 1 },
              tablet: { x: 0, y: 3, w: 6, h: 3 },
              desktop: { x: 8, y: 0, w: 4, h: 4 },
            }}
            title={<div>Window 3</div>}
            bounds={{ top: 0, left: 0, right: 12, bottom: 6 }}
          >
            <div style={{ padding: "1rem" }}>
              Bounded to the upper half of the screen.
            </div>
          </Window>

          <Window
            id="window4"
            grids={{
              mobile: { x: 0, y: 3, w: 12, h: 1 },
              tablet: { x: 6, y: 3, w: 6, h: 3 },
              desktop: { x: 0, y: 4, w: 4, h: 4 },
            }}
            title={<div>Window 4</div>}
            draggable={false}
          >
            <div style={{ padding: "1rem" }}>Not draggable.</div>
          </Window>

          <Window
            id="window5"
            grids={{
              mobile: { x: 0, y: 4, w: 12, h: 1 },
              tablet: { x: 0, y: 6, w: 6, h: 3 },
              desktop: { x: 4, y: 4, w: 4, h: 4 },
            }}
            title={<div>Window 5</div>}
            resizable={false}
          >
            <div style={{ padding: "1rem" }}>Not resizable.</div>
          </Window>

          <Window
            id="window6"
            grids={{
              mobile: { x: 0, y: 5, w: 12, h: 1 },
              tablet: { x: 6, y: 6, w: 6, h: 3 },
              desktop: { x: 8, y: 4, w: 4, h: 4 },
            }}
            title={<div>Window 6</div>}
            minimizable={false}
          >
            <div style={{ padding: "1rem" }}>Not minimizable.</div>
          </Window>

          <Window
            id="window7"
            grids={{
              mobile: { x: 0, y: 6, w: 12, h: 1 },
              tablet: { x: 0, y: 9, w: 6, h: 3 },
              desktop: { x: 0, y: 8, w: 4, h: 4 },
            }}
            title={<div>Window 7</div>}
            maximizable={false}
          >
            <div style={{ padding: "1rem" }}>Not maximizable.</div>
          </Window>

          <Window
            id="window8"
            grids={{
              mobile: { x: 0, y: 7, w: 12, h: 1 },
              tablet: { x: 6, y: 9, w: 6, h: 3 },
              desktop: { x: 4, y: 8, w: 4, h: 4 },
            }}
          >
            <div style={{ padding: "1rem" }}>Without a title.</div>
          </Window>

          <Window
            id="window9"
            grids={{
              mobile: { x: 0, y: 8, w: 12, h: 1 },
              tablet: { x: 2, y: 2, w: 8, h: 8 },
              desktop: { x: 8, y: 8, w: 4, h: 4 },
            }}
            title={<div>Window 9</div>}
            startMinimized={true}
          >
            <div style={{ padding: "1rem" }}>Starting minimized.</div>
          </Window>
        </Windows>
      </WindowsProvider>
    </div>
  );
};

export default App;
