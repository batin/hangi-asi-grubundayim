import React, { useState, useEffect } from "react";
import { useInfo } from "../Context/Info";
import "./Result.scss";

const Result = () => {

  const { group } = useInfo();
  const [show, setShow] = useState(true);

  useEffect(() => {
    const hasVoted = localStorage.getItem('voted');
    window.send({ UserGroup: `${group}. group` })
    setShow(Boolean(!hasVoted));
  }, [])

  const sendEvent = (event) => {
    window.send({ UserGroup: `${group}. group`, Vote: event })
    localStorage.setItem('voted', 'true');
    setShow(false);
  };
  
  const redicectToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${group}.%20a%C5%9F%C4%B1%20grubunday%C4%B1m%21&url=https://hangiasigrubundayim.com/${group}.html`,"_blank")
  }

  return (
    <div className="result">
      <div className="result-heading">
        <div className="group">{group} <span>.</span></div>
        <h1 className="result-text" >aşı grubundasın.</h1>
      </div>
      { show && <div className="separator" />}
      { show &&
        (<div className="survey">
          <h2>Aşı olmayı düşünüyor musun?</h2>
          <div className="buttons">
            <button className="left" onClick={() => sendEvent("Evet")}>
              Evet
                </button>
            <button className="mid" onClick={() => sendEvent("Kararsizim")}>
              Karasızım
                </button>
            <button className="right" onClick={() => sendEvent("Hayir")}>
              Hayır
                </button>
          </div>
        </div>)
      }
      { show && <p className="result-info">*Anket verileri <strong className="tooltip"> anonim</strong> şekilde saklanmaktadır.</p>}
      <div className="twitter" onClick={redicectToTwitter}>{"Twitter'da Paylaş"}</div>
    </div>
  );
};

export { Result };
