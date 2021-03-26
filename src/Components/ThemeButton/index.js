import React from "react";
import { useTheme } from "../../Context/Theme";
import "./style.scss";

const ThemeButton = () => {
  const { theme, changeTheme } = useTheme();
  if (!theme) {
    return null
  }
  return (
    <button onClick={changeTheme} className="theme-button">
      <img
        src={theme.name === "dark" ? "sun.svg" : "moon.svg"}
        alt="sun-theme"
        width="32"
      />
    </button>
  );
};

export { ThemeButton };
