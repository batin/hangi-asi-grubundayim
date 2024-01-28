import React from 'react';
import Richie from "../Assets/richie.png";
import twitter from "../Assets/twitter.webp";
import { ThemeButton } from "../Components/ThemeButton";
import { motion } from 'framer-motion';
import { useInfo } from "../Context/Info";
import { QuestionsPage } from './QuestionsPage';
import { ResultPage } from './ResultPage';

function Page() {

  const { group } = useInfo();

  return (
    <>
      <motion.h1 initial={{ y: "-100%", opacity: 0 }} animate={{ y: "0%", opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }} className="heading">Hangi aşı grubundayım?</motion.h1>
      {group === 0 ? <QuestionsPage /> : <ResultPage />}
      <ThemeButton />
      <motion.img initial={{ x: "10%", opacity: 0 }} animate={{ x: "0%", opacity: 1 }} transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }} className="homepage-icon" src={Richie} alt="Homepage Icon" />
      <p className="info">
        *Hesaplamalar tahmini veriler ile yapılmaktadır.
      </p>
      <a
        href="https://twitter.com/btnerylmz"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="twitter-icon"
          src={twitter}
          alt="Twitter Icon"
        />
      </a>
    </>
  );
}

export { Page };
