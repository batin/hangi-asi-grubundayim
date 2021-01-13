import React, { useState, useEffect } from "react";
import { useInfo } from "../Context/Info";
import "./Result.scss";

const Result = () => {
  
  const { group } = useInfo();
  const [show, setShow] = useState(true);
  
  useEffect(() => {
    const hasVoted = localStorage.getItem('voted');
    setShow(Boolean(!hasVoted));
  }, [])

  const sendEvent = (event) => {
    console.log(event)
    localStorage.setItem('voted', 'true');
    setShow(false)
  };

  return (
    <div className="result">
      <div className="result-heading">
      <div className="group">{ group }.</div>
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
    </div>
  );
};

export { Result };
