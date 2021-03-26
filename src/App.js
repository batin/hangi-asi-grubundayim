import React, { useEffect } from "react";
import "./App.scss";
import Richie from "./Assets/richie.png";
import twitter from "./Assets/twitter.webp";
import { Content } from "./Components/Content/";
import { ThemeButton } from "./Components/ThemeButton/";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFoundPage from "./Pages/NotFoundPage";
import { motion } from 'framer-motion';
import { useTheme } from "./Context/Theme";

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    window.send({ event: `PageView` });
  }, []);

  return (
    <div className="App" style={theme.body}>
      <Router>
        <Switch>
          <Route path="/1.html" />
          <Route path="/2.html" />
          <Route path="/3.html" />
          <Route path="/4.html" />
          <Route exact path="/">
            <motion.h1 initial={{ y: "-100%", opacity: 0 }} animate={{ y: "0%", opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }} className="heading">Hangi aşı grubundayım?</motion.h1>
            <Content />
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
          </Route>
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
