import React, { useState, useRef, useEffect } from "react";
import TypingText from "./Components/TypeWriter";
import VideoPlayer from "./Components/VideoPlayer";
import "./App.css";
import Header from "./Components/Header";
import logo from "./images/side-spray-tr2.png";
import Splash from "./Components/Splash";
import Form from "./Components/Popup";
import TimeDate from "./Components/TimeDate";
import Footer from "./Components/Footer";

const App = () => {
  useEffect(() => {
    // Ensure that splashPage exists before adding the event listener
    const splashPage = document.querySelector(".splash-page");
    if (splashPage) {
      splashPage.addEventListener("animationend", () => {
        splashPage.classList.add("fade-out"); // Add the display: none class
      });
    }
  }, []); // Empty dependency array ensures this runs once on mount

  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const formRef = useRef(null);

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbyI6H3FqH9F2yXSAwi1LQV2lHDoYdTzzF-jdMCQPvxi82YUYDPPeHMv2p8fBtzkqfVc/exec";

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    fetch(scriptUrl, {
      method: "POST",
      body: new FormData(formRef.current),
    })
      .then((response) => {
        setIsLoading(false);
        setFormSubmitted(true);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="app">
      <Splash className="splash-page" />
      <div className="logo-container">
        {/* <img src={logo} alt="logo" className="app--logo-image" /> */}
      </div>
      <Header />
      <Footer />
      {/* <Form /> */}
    </div>
  );
};

export default App;
