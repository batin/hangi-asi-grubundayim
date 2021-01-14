import React, { useState, useEffect } from "react";
import { useInfo } from "../Context/Info";
import "./Result.scss";

const Result = () => {

  const { group, line } = useInfo();
  const [show, setShow] = useState(true);

  useEffect(() => {
    const hasVoted = localStorage.getItem('voted');
    window.send({ UserGroup: `${group}. group` })
    setShow(Boolean(!hasVoted));
  }, [])

  const sendEvent = (event) => {
    window.send({ UserGroup: `${group}. group`, Vote: event });
    localStorage.setItem("voted", "true");
    setShow(false);
  };

  const redirectToTwitter = () => {
    line === "" ?
    window.open(`https://twitter.com/intent/tweet?text=${group}.%20a%C5%9F%C4%B1%20grubunday%C4%B1m&url=https://hangiasigrubundayim.com/${group}.html`, "_blank")
    :
    window.open(`https://twitter.com/intent/tweet?text=${group}.%20a%C5%9F%C4%B1%20grubunda%20${line}%20s%C4%B1ras%C4%B1nday%C4%B1m&url=https://hangiasigrubundayim.com/${group}.html`, "_blank")
  }

  const redirectToOfficial = () => {
    window.open(
      `https://covid19asi.saglik.gov.tr/TR-77707/covid-19-asisi-uygulanacak-kisiler.html`,
      "_blank"
    );
  };

  return (
    <div className="result">
      <div className="result-heading">
        {line === "" ? (
          <h1 className="result-text">
            <span className="important" onClick={redirectToOfficial}>
              {group}.
            </span>{" "}
            aşı grubundasın.
          </h1>
        ) : (
          <h1 className="result-text">
            <span className="important" onClick={redirectToOfficial}>
              {group}.
            </span>{" "}
            aşı grubunda{" "}
            <span className="important" onClick={redirectToOfficial}>
              {line}
            </span>{" "}
            sırasındasın.
          </h1>
        )}
      </div>
      {show && <div className="separator" />}
      {show && (
        <div className="survey">
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
        </div>
      )}
      {show && (
        <p className="result-info">
          *Anket verileri <strong className="tooltip"> anonim</strong> şekilde
          saklanmaktadır.
        </p>
      )}
      <div className="twitter button" onClick={redirectToTwitter}>
        {"Twitter'da Paylaş"}
      </div>
      <a className="back button" href="/">
        {"Geri Dön"}
      </a>
    </div>
  );
};

export { Result };
