import React, { useState } from "react";
import { ThemeProvider } from "../Context/Theme";

const themes = {
  dark: {
    name: 'dark',
    body: {
      background: '#343b42',
      color: '#e7eff3'
    },
    select: {
      background: '#175157',
      color: '#e7eff3',
    },
    questions: {
      stroke: '#fff'
    }
  },
  light: {
    name: 'light',
    body: {
      background: '#fff',
      color: '#222',
    },
    select: {
      background: '#e7eff3',
      color: '#222',
    }
  }
}

const themeName = localStorage.getItem('theme');

const WithTheme = ({ children }) => {
  const [theme, setTheme] = useState(themes[themeName] || themes.light);

  const changeTheme = () => {
    if (theme === themes.dark) {
      localStorage.setItem('theme', 'light');
      setTheme(themes.light);
    } else {
      localStorage.setItem('theme', 'dark');
      setTheme(themes.dark);
    }
  }

  const props = {
    theme,
    changeTheme,
  };

  return <ThemeProvider value={props}>{children}</ThemeProvider>;
};

export { WithTheme };
