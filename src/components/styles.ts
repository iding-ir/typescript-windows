import { createUseStyles } from "react-jss";

import { Styles } from "./Windows";

export const useStyles = (styles: Styles) => {
  const {
    borderRadius,
    headerSize,
    headerColor,
    headerBackground,
    bodyColor,
    bodyBackground,
    boxShadow,
  } = styles;

  return createUseStyles({
    "tw-windows": {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",

      "& .tw-taskbar": {
        display: "flex",
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
      },

      "& .tw-window": {
        position: "absolute",
        overflow: "hidden",
        borderRadius: `${borderRadius} ${borderRadius} 0 ${borderRadius}`,
        border: `1px solid ${headerBackground}`,
        boxShadow: boxShadow,

        "& .tw-header": {
          display: "flex",
          position: "relative",
          width: "100%",
          height: headerSize,
          lineHeight: headerSize,
          color: headerColor,
          backgroundColor: headerBackground,
          boxShadow: boxShadow,
          zIndex: "1000",
          cursor: "pointer",
          userSelect: "none",

          "&.tw-draggable": {
            cursor: "move",
          },

          "& .tw-title": {
            flexGrow: 10,
            padding: "0 1rem",
            overflow: "hidden",
          },

          "& .tw-buttons": {
            display: "flex",
            flexShrink: 0,
            padding: "0 0.5rem",

            "& .tw-button": {
              width: headerSize,
              height: headerSize,
              transition: "opacity 0.3s",
              backgroundSize: "50%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.5,
              cursor: "pointer",

              "&:hover": {
                opacity: 1,
              },

              "&.tw-minimize": {
                backgroundImage:
                  "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAM1BMVEUAAACEhISIiIiGhoaJiYmGhoaHh4eHh4eIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjiyFMgAAAAEHRSTlMAHR43ODl1d4mLjeju+fr9acPXgwAAAFFJREFUeNrt0zUCgDAQRNHBffLvf1pKHCpS7asjqxrNCw8yryxI86MEgkmPph8OxIGm7Xba+nygNAcuvw4U5y/q4xdV9jTjwPfqmVeLhtcT7leKCRaLLITEhwAAAABJRU5ErkJggg==)",
              },

              "&.tw-maximize": {
                backgroundImage:
                  "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAeFBMVEUAAAD///+JiYmIiIiPj4+Hh4eOjo6GhoaFhYWEhISGhoaIiIiHh4eJiYmGhoaHh4eHh4eHh4eIiIiJiYmJiYmIiIiHh4eIiIiHh4eIiIiIiIiJiYmIiIiJiYmHh4eIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIgiuQX5AAAAJ3RSTlMAAQ0PEBESExkbKCs1ODlAREhJVGxtd4OEh4uMqarAyMrMzdjd+P5IcrmSAAAA2UlEQVR42rWTA4IEMQAEe62xbfz/haeoz+7FoCpOUE86/QVPuQzmXYWV4gvB53fPBFsIzmuh8R5jQcZ6emy4hhKvkpkaxodf/pLnT0AI15bqoPLDTQrnHRnEj2clgAziMAIZxEkgg7gQ5nU5AcC+E2MR/e/2AHBa1hlBEgLacAFXcyBMxOxro98C217zl9lHBwA4RHv8V/axaCLmJj7t5GfDDD6fKJ7qAk9JeaqFQJwMEpiToQXmbCjhypyN21c3LZfnOl4fnI1AGz44nx+9Tw9v9cbx7+n43wOGjkWM6lWC8gAAAABJRU5ErkJggg==)",
              },
            },
          },
        },

        "& .tw-body": {
          overflow: "auto",
          color: bodyColor,
          backgroundColor: bodyBackground,
        },

        "&.tw-minimize-on": {
          borderRadius: borderRadius,

          "&.tw-taskbar-on": {
            position: "relative",
            transform: "none !important",
            borderRadius: borderRadius,
            margin: "0.25rem",
          },

          "& .tw-body": {
            display: "none",
          },
        },

        "&.tw-maximize-on": {
          top: "0 !important",
          left: "0 !important",
          width: "100% !important",
          height: "100% !important",
          transform: "none !important",
          borderRadius: "0 !important",

          "& .tw-header": {
            width: "100% !important",
          },

          "& .tw-body": {
            display: "block !important",
            width: "100% !important",
            height: "100% !important",
          },
        },
      },
    },
  });
};
