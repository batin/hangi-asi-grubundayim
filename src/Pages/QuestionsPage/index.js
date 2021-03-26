import React from "react";
import { Select } from "../../Components/Select";
import Unselected from "../../Assets/unselected.svg";
import Selected from "../../Assets/selected.svg";
import SelectedDark from "../../Assets/selected-dark.svg";
import { ReactSVG } from 'react-svg'
import { useInfo } from "../../Context/Info";
import { motion } from 'framer-motion';
import { useTheme } from "../../Context/Theme";
import "./style.scss";

const QuestionsPage = () => {
  const {
    hasDisease,
    changeHasDisease,
    age,
    changeAge,
    occupation,
    changeOccupation,
    decideGroup,
    ageOptions,
    occupationOptions,
  } = useInfo();
  const { theme } = useTheme();
  return (
    <motion.div initial={{ x: "-10%", opacity: 0 }} animate={{ x: "0%", opacity: 1 }} transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }} className="questions">
      <div className="first-line">
        <Select
          options={occupationOptions}
          value={occupation}
          setValue={changeOccupation}
          firstValue={<option>Meslek Grubu</option>}
        />
        <Select
          options={ageOptions}
          value={age}
          setValue={changeAge}
          firstValue={<option>Yaş Grubu</option>}
        />
      </div>
      <div className="second-line">
        <p>Kronik hastalığınız var mı?</p>
        {hasDisease ? (
          theme.name === "dark" ? <ReactSVG src={SelectedDark} alt="Selected Checkbox"
            onClick={() => changeHasDisease(false)} /> :
            <ReactSVG src={Selected} alt="Selected Checkbox"
              onClick={() => changeHasDisease(false)} />

        ) : (
            <ReactSVG src={Unselected} alt="Unselected Checkbox"
              onClick={() => changeHasDisease(true)} />
          )}
      </div>
      <button className="cta" onClick={decideGroup}>
        Hesapla
      </button>
    </motion.div>
  );
};

export { QuestionsPage };
