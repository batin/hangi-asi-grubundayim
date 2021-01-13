import React, { useContext } from "react";

const defaultContext = {
  hasDisease: false,
  age: "",
  occupation: "",
};

const InfoContext = React.createContext(defaultContext);

export const InfoProvider = InfoContext.Provider;
export const useInfo = () => useContext(InfoContext);
