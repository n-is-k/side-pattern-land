import React, { useState, useRef } from "react";
import "./App.css";
import logo from "./images/side-spray-tr2.png";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const formRef = useRef(null);

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbynkI9pPiSAfzt4-x6GUMvfSQ0jLPC7OoA9DkHX1tRL8AR92zzqWBk3leQHXFJfrADTVw/exec";

  const postData = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
  };

  const debounce = (func, delay) => {
    let timer;

    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => func(), delay);
    };
  };

  const debouncedPost = debounce(postData, 1000);
  // Decide to debounce or disable the inputs while loading is true 🫡

  return (
    <div className="app">
      <div>
        <div className="app--logo-wrapper">
          <img src={logo} alt="logo" className="app--logo-image" />
        </div>

        <div className="app--content">
          {formSubmitted ? (
            <p>Ta xx</p>
          ) : (
            <>
              {isLoading ? <p>Loading...</p> : <p>Pls fill:</p>}
              <form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  disabled={isLoading}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  disabled={isLoading}
                />
                <button type="submit" name="submit" disabled={isLoading}>
                  Submit
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
