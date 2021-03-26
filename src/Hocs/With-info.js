import React, { useState } from "react";
import { InfoProvider } from "../Context/Info";

const WithInfo = ({ children }) => {
  const [hasDisease, setHasDisease] = useState(false);
  const [age, setAge] = useState(-1);
  const [occupation, setOccupation] = useState(-1);
  const [group, setGroup] = useState(0);
  const [line, setLine] = useState("");

  const ageOptions = [
    { type: "85 yaş üzeri", priority: 1, line: 'C1' },
    { type: "80-84 yaş arası", priority: 1, line: 'C2' },
    { type: "75-79 yaş arası", priority: 1, line: 'C3' },
    { type: "70-74 yaş arası", priority: 1, line: 'C4' },
    { type: "65-69 yaş arası", priority: 1, line: 'C5' },
    { type: "60-64 yaş arası", priority: 2, line: 'B1' },
    { type: "55-59 yaş arası", priority: 2, line: 'B2' },
    { type: "50-54 yaş arası", priority: 2, line: 'B3' },
    { type: "40-49 yaş arası", priority: 3, line: 'B1' },
    { type: "30-39 yaş arası", priority: 3, line: 'B2' },
    { type: "18-29 yaş arası", priority: 3, line: 'B3' },
    { type: "18 yaş altı", priority: 4, line: '' }
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
    { type: "Zabıta, özel güvenlik", priority: 2, line: 'A4' },
    { type: "Adalet Bakanlığı", priority: 2, line: 'A5' },
    { type: "Ceza evleri", priority: 2, line: 'A6' },
    { type: "Eğitim sektörü", priority: 2, line: 'A7' },
    { type: "Gıda sektörü", priority: 2, line: 'A8' },
    { type: "Taşımacılık sektörü", priority: 2, line: 'A9' },
    { type: "Diğer", priority: 4, line: '' }
  ];

  const changeHasDisease = (disease) => {
    if (typeof disease == "boolean") {
      setHasDisease(disease);
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
      const decision = selectedOcc.priority < selectedAge.priority ? selectedOcc.priority : selectedAge.priority

      if (decision === 1) {
        if (selectedOcc.priority === 1) {
          setLine(selectedOcc.line);
        } else {
          setLine(selectedAge.line);
        }
      }

      if (decision === 2) {
        if (selectedOcc.priority === 2) {
          setLine(selectedOcc.line);
        } else {
          setLine(selectedAge.line);
        }
      }

      if (decision === 3) {
        if (hasDisease) {
          setLine(selectedAge.line.replace("B", "A"));
        } else {
          setLine(selectedAge.line);
        }
      }
      window.send({ UserAge: selectedAge.type, UserOccupation: selectedOcc.type, UserLine: line })
      setGroup(decision);
    }
  };

  const props = {
    hasDisease,
    changeHasDisease,
    age,
    changeAge,
    occupation,
    changeOccupation,
    group,
    line,
    decideGroup,
    ageOptions,
    occupationOptions,
  };

  return <InfoProvider value={props}>{children}</InfoProvider>;
};

export { WithInfo };
