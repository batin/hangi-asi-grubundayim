import React, { useContext } from "react";

const defaultContext = {
  theme: {},
  changeTheme: () => {}
};

const ThemeContext = React.createContext(defaultContext);

export const ThemeProvider = ThemeContext.Provider;
export const useTheme = () => useContext(ThemeContext);
