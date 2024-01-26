import React, { useState, useEffect } from "react";
import { useInfo } from "../../Context/Info";
import { motion } from 'framer-motion';
import "./style.scss";

const ResultPage = () => {

  const { group, line } = useInfo();
  const [show, setShow] = useState(true);

  useEffect(() => {
    const hasVoted = localStorage.getItem('voted');
    setShow(Boolean(!hasVoted));
  }, [])

  const sendEvent = (event) => {
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
    <motion.div initial={{ x: "-50%", opacity: 0 }} animate={{ x: "0%", opacity: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }} className="result">
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
      <motion.div initial={{ y: "-50%", opacity: 0 }} animate={{ y: "0%", opacity: 1 }} transition={{ duration: 0.5, delay: 0.8, ease: "backOut" }}  className="twitter button" onClick={redirectToTwitter}>
        {"Twitter'da Paylaş"}
      </motion.div>
      <motion.a initial={{ y: "-50%", opacity: 0 }} animate={{ y: "0%", opacity: 1 }} transition={{ duration: 0.5, delay: 1, ease: "backOut" }}  className="back button" href="/">
        {"Geri Dön"}
      </motion.a>
    </motion.div>
  );
};

export { ResultPage };
