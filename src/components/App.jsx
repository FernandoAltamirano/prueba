import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Portfolio from "./Portfolio.jsx";
import Contact from "./Contact.jsx";
import Modal from "./Modal.jsx";
const App = () => {
  const [size, setSize] = useState(window.innerWidth);
  const [showModal, setShowModal] = useState(false);
  const handleClose = (s) => {
    if (!s) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", function () {
      setSize(window.innerWidth);
    });
  });
  return (
    <div className="App">
      {showModal ? (
        <Modal handleClose={handleClose} />
      ) : (
        <>
          <Header size={size} handleClose={handleClose} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
