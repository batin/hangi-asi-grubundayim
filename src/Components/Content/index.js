import React from "react";
import { useInfo } from "../../Context/Info";
import { QuestionsPage } from "../../Pages/QuestionsPage";
import { ResultPage } from "../../Pages/ResultPage";

const Content = () => {  
  const { group } = useInfo();
  return group === 0 ? <QuestionsPage /> : <ResultPage />
}

export { Content };
