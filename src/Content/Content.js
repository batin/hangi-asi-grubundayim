import React from "react";
import { useInfo } from "../Context/Info";
import { Questions } from "../Questions/Questions";
import { Result } from "../Result/Result";

const Content = () => {  
  const { group } = useInfo();
  return group === 0 ? <Questions /> : <Result />
}

export { Content };
