import React, { useState } from "react";
import { InfoProvider } from "../Context/Info";

const WithInfo = ({ children }) => {
  const [hasDisease, setHasDisease] = useState(false);
  const [handicapped, setHandicapped] = useState(false);
  const [age, setAge] = useState(-1);
  const [occupation, setOccupation] = useState(-1);
  const [group, setGroup] = useState(0);

  const ageOptions = [
    { type: "65 yaş üzeri", priority: 1 },
    { type: "50-65 yaş arası", priority: 2 },
    { type: "30-50 yaş arası", priority: 3 },
    { type: "30 yaş altı", priority: 4 },
  ];
  const occupationOptions = [
    { type: "Sağlık çalışanı", priority: 1 },
    { type: "Kalabalık ortamlarda çalışan", priority: 2 },
    { type: "Diğer", priority: 3 },
    { type: "İşsiz", priority: 4 },
    { type: "Öğrenci", priority: 4 },
  ];

  const changeHasDisease = (disease) => {
    if (typeof disease == "boolean") {
      setHasDisease(disease);
    }
  };

  const changeHandicapped = (handicapped) => {
    if (typeof handicapped == "boolean") {
      setHandicapped(handicapped);
    }
  };

  const changeAge = (age) => {
    if (typeof age == "string") {
      setAge(age);
    }
  };

  const changeOccupation = (occupation) => {
    if (typeof occupation == "string") {
      setOccupation(occupation);
    }
  };

  const decideGroup = () => {
    if (age !== -1 && occupation !== -1) {
      const selectedOcc = occupationOptions.find(
        (option) => option.type === occupation
      );
      const selectedAge = ageOptions.find((option) => option.type === age);
      const diseasePriority = !hasDisease
        ? 4
        : selectedAge.priority === 3
        ? 3
        : 2;
      const decisionArray = [
        selectedAge.priority,
        selectedOcc.priority,
        handicapped ? 1 : 4,
        diseasePriority,
      ];
      const decision = decisionArray.sort()[0];
      setGroup(decision);
    }
  };

  const props = {
    hasDisease,
    changeHasDisease,
    handicapped,
    changeHandicapped,
    age,
    changeAge,
    occupation,
    changeOccupation,
    group,
    decideGroup,
    ageOptions,
    occupationOptions,
  };
  
  return <InfoProvider value={props}>{children}</InfoProvider>;
};

export { WithInfo };
