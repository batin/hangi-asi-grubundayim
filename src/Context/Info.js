import React, { useContext } from "react";

const defaultContext = {
  hasDisease: false,
  age: "",
  occupation: "",
  group: "",
  line: "",
  ageOptions: {},
  occupationOptions: {},
  changeHasDisease: () => {},
  changeAge: () => {},
  changeOccupation: () => {},
  decideGroup: () => {},
};

const InfoContext = React.createContext(defaultContext);

export const InfoProvider = InfoContext.Provider;
export const useInfo = () => useContext(InfoContext);
