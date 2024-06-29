import React, { useState, useRef } from "react";
import classNames from 'classnames';
import TypingText from "./Components/TypeWriter";

import "./App.css";
import logo from "./images/side-spray-tr2.png";
// import logo from "./images/side-spray-btr.png";

const App = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const formRef = useRef(null);

  const scriptUrl =
"https://script.google.com/macros/s/AKfycbzXBEjRRJIREhfIgVxj5pUMkljpDYTMKq8rdEUPq9NYS99NUBiog6xjMnKRcGgiWTzY/exec"
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
    <div className="app background-b">
      <div>
        <div className="container-1"> 
        </div>
        <div className="app--logo-wrapper">
          <img src={logo} alt="logo" className="app--logo-image" />
        </div>
        <div className="typing"> <TypingText /></div>
        <div className="app--content">
          {formSubmitted ? (
            <>
              {/* <p className="paragraph">Bless</p>  */}
             <p className="paragraph">Welcome to Side Pattern.</p> 
            </>
          ) : (
            <>
              <form ref={formRef} onSubmit={handleSubmit} name="google-sheet" className="form">
                <input
                  type="email"
                  name="email"
                  autocomplete="off"
                  placeholder="Email"
                  onfocus="this.placeholder=''"
                  onblur="this.placeholder = 'Email'" 
                  required
                  className={`field ${isLoading ? "hidden" : ""}`}
                />
                <button type="submit" name="submit" className="button" disabled={isLoading}>
                  {isLoading ? "Please wait..." : "Submit"}
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
