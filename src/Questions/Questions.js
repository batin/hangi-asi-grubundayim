import React from "react";
import { Select } from "../Select/Select";
import "./Questions.scss";
import Unselected from "../Assets/unselected.svg";
import Selected from "../Assets/selected.svg";

import { useInfo } from "../Context/Info";
// [age, occ, disabled]
// disease 50+ => 2, 50- => 3

// age => 65+ 1, 50-65 2, 20-50 3, 20- 4,
// occupation => Sağlık çalışanı 1, Kalabalık ortamlarda çalışan 2, Diğer 3, işsiz 4
// disabled => 1,4

// disease => 1,4
const Questions = () => {
  const { hasDisease, changeHasDisease, handicapped, changeHandicapped, age, changeAge, occupation, changeOccupation, group, decideGroup, ageOptions,occupationOptions } = useInfo();
  return (
    <div className="questions">
      <div className="first-line">
        <Select options={occupationOptions} value={occupation} setValue={changeOccupation} firstValue={<option>Meslek Grubu</option>}/>
        <Select options={ageOptions} value={age} setValue={changeAge} firstValue={<option>Yaş Grubu</option>} />
      </div>
      <div className="second-line">
        <p>Kronik hastalığınız var mı?</p>
        {hasDisease ? (
          <img
            src={Selected}
            alt="Selected Checkbox"
            onClick={() => changeHasDisease(false)}
          />
        ) : (
          <img
            src={Unselected}
            alt="Unselected Checkbox"
            onClick={() => changeHasDisease(true)}
          />
        )}
      </div>
      <div className="second-line">
        <p>Herhangi bir engeliniz var mı?</p>
        {handicapped ? (
          <img
            src={Selected}
            alt="Selected Checkbox"
            onClick={() => changeHandicapped(false)}
          />
        ) : (
          <img
            src={Unselected}
            alt="Unselected Checkbox"
            onClick={() => changeHandicapped(true)}
          />
        )}
      </div>
      {/*<p> sonuc: { group } </p>*/}
      <button className="cta" onClick={decideGroup}>Hesapla</button>

    </div>
  );
};

export { Questions };
