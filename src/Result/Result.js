import React, { useState, useEffect } from "react";
import { useInfo } from "../Context/Info";
import "./Result.scss";

const Result = () => {

  const { group } = useInfo();
  const [show, setShow] = useState(true);

  useEffect(() => {
    const hasVoted = localStorage.getItem('voted');
    window.dataLayer.push({
      group: `${group}. group`
    });
    setShow(Boolean(!hasVoted));
  }, [])

  const sendEvent = (event) => {
    window.dataLayer.push({
      event: event,
      group: `${group}. group`
    });
    localStorage.setItem('voted', 'true');
    setShow(false);
  };

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
    </div>
  );
};

export { Result };
