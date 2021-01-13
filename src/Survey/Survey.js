import React, { useState } from "react";
import "./Survey.scss";

const Result = () => {
  const [show, setShow] = useState(true);
  const sendEvent = (event) => {};
  return (
    show && (
      <div className="survey">
        <h2>Aşı olmayı düşünüyor musun?</h2>
        <div className="buttons">
          <button className="left" onClick={sendEvent("Evet")}>
            Evet
          </button>
          <button className="mid" onClick={sendEvent("Kararsizim")}>
            Karasızım
          </button>
          <button className="right" onClick={sendEvent("Hayir")}>
            Hayır
          </button>
        </div>
      </div>
    )
  );
};

export { Result };
