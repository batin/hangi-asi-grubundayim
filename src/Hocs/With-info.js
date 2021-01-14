import React, { useState } from "react";
import { InfoProvider } from "../Context/Info";

const WithInfo = ({ children }) => {
  const [hasDisease, setHasDisease] = useState(false);
  const [handicapped, setHandicapped] = useState(false);
  const [age, setAge] = useState(-1);
  const [occupation, setOccupation] = useState(-1);
  const [group, setGroup] = useState(0);

  const ageOptions = [
    { type: "85 yaş üzeri", priority: 1, line: 'C1' },
    { type: "80-84 yaş arası", priority: 1, line: 'C2' },
    { type: "75-79 yaş arası", priority: 1, line: 'C3' },
    { type: "70-74 yaş arası", priority: 1, line: 'C4' },
    { type: "65-69 yaş altı", priority: 1, line: 'C5' },

    { type: "60-64 yaş altı", priority: 2, line: 'B1' },
    { type: "55-59 yaş altı", priority: 2, line: 'B2' },
    { type: "50-54 yaş altı", priority: 2, line: 'B3' },

    { type: "40-49 yaş altı", priority: 3, line: 'A1a' },
    { type: "30-39 yaş altı", priority: 3, line: 'A1b' },
    { type: "18-29 yaş altı", priority: 3, line: 'A1c' }
  ];
  const occupationOptions = [
    { type: "Sağlık çalışanı", priority: 1, line: 'A' },
    { type: "Tıp öğrencisi", priority: 1, line: 'A' },
    { type: "Eczacı", priority: 1, line: 'A' },
    { type: "Diş hekimi", priority: 1, line: 'A' },
    { type: "Diş hekimliği öğrencisi", priority: 1, line: 'A' },
    { type: "Bakım evi çalışanı", priority: 1, line: 'B' },
    { type: "Milli Savunma Bakanlığı", priority: 2, line: 'A1' },
    { type: "İçişleri Bakanlığı", priority: 2, line: 'A2' },
    { type: "Kritik görevlerde çalışan", priority: 2, line: 'A3' },
    { type: "Zabıta, özel güvenlik", priority: 2, line: 'A4'},
    { type: "Adalet Bakanlığı", priority: 2, line: 'A5'},
    { type: "Ceza evleri", priority: 2, line: 'A6'},
    { type: "Eğitim sektörü", priority: 2, line: 'A7'},
    { type: "Gıda sektörü", priority: 2, line: 'A8'},
    { type: "Taşımacılık sektörü", priority: 2, line: 'A9'},
    { type: "Diğer", priority: 3 }
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
      if(hasDisease && selectedAge.priority === 3) {
        selectedAge.line.replace("A", "B");
      }
      const decisionArray = [
        selectedAge.priority,
        selectedOcc.priority,
        handicapped ? 1 : 4,
        diseasePriority,
      ];
      const decision = decisionArray.sort()[0];
      window.send({ UserAge: selectedAge.type, UserOccupation: selectedOcc.type })
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
