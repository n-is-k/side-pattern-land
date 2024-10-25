import React, { useState, useRef } from "react";
import TypingText from "./Components/TypeWriter";
import VideoPlayer from "./Components/VideoPlayer";
import "./App.css";
// import logo from "./images/side-spray-tr2.png";
// import logo from "./images/side-spray-btr.png";
import logo from "./images/side-spray-tr2.png";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const formRef = useRef(null);

  const scriptUrl =
    // "https://script.google.com/macros/s/AKfycbzXBEjRRJIREhfIgVxj5pUMkljpDYTMKq8rdEUPq9NYS99NUBiog6xjMnKRcGgiWTzY/exec"
    // "https://script.google.com/macros/s/AKfycbzxVlj5qv10deEw0RlYCi-aJPnEWR1GhIYKHzn1D4pJNH9DxCJOx3VO8u16GeNUkp9H/exec"
    // "https://script.google.com/macros/s/AKfycbyzIcVIDQksVy-S0o5gm5lUihfRUIx7yiwOZTqmYCDRaVWnpTNWHRPDW3_LzB6FxXjm/exec"
    // "https://script.google.com/macros/s/AKfycbymHAYbsm1QiZw9Jg38V7G5MH0d1cHrvK13K986T9zjFbFRDbOmTcP1pnv2vhoxN-3U/exec"
    // "https://script.google.com/macros/s/AKfycby9EqJTvGjLzDYoWMuNgLTKKaTTDYrfzylUGjANCDDCMf1iTRvgVtl6fbFEK5F7Lk_0/exec"npm
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
      <div className="typing">
        {" "}
        <TypingText />
      </div>
      {/* <VideoPlayer></VideoPlayer> */}
      <div>
        <div className=""></div>
        <div className="app--logo-wrapper">
          {/* <img src={logo} alt="logo" className="app--logo-image" /> */}
        </div>
        <div className="typing"> {/* <TypingText /> */}</div>
        <div className="sticker">
          {/* <img src={logo} alt="logo" className="app--logo-image"></img> */}
        </div>
      </div>
      <div className="form">
        <div className="app--content">
          {formSubmitted ? (
            <>
              {/* <p className="paragraph">Bless</p>  */}
              <p className="paragraph">Submitted.</p>
            </>
          ) : (
            <>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                name="google-sheet"
                className="form"
              >
                <input
                  type="first"
                  name="first"
                  autocomplete="off"
                  placeholder="First Name"
                  onfocus="this.placeholder=''"
                  onblur="this.placeholder = 'First Name'"
                  required
                  className={`field ${isLoading ? "hidden" : ""}`}
                />
                <input
                  type="last"
                  name="last"
                  autocomplete="off"
                  placeholder="Last Name"
                  onfocus="this.placeholder=''"
                  onblur="this.placeholder = 'Last Name'"
                  required
                  className={`field ${isLoading ? "hidden" : ""}`}
                />
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
                <button
                  type="submit"
                  name="submit"
                  className="button"
                  disabled={isLoading}
                >
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
