import React from "react";
import { useInfo } from "../Context/Info";
import "./theme.scss";

const Theme = ({ children }) => {
  const { themes, changeTheme } = useInfo();
  return (
    <div className="App" style={themes.body}>
      <button onClick={changeTheme} className="theme-button">
        <img
          src={themes.name === "dark" ? "sun.svg" : "moon.svg"}
          alt="sun-theme"
          width="32"
        />
      </button>
      {children}
    </div>
  );
};

export default Theme;
