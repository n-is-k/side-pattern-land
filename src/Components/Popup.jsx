import { useState, useRef, useEffect } from "react";
import React from "react";

function Form() {
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
    <>
      <div className="form">
        <div className="app--content">
          {formSubmitted ? (
            <p className="paragraph">Submitted.</p>
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              name="google-sheet"
              className="form"
            >
              <input
                type="text"
                name="first"
                autoComplete="off"
                placeholder="First Name"
                required
                className={`field ${isLoading ? "hidden" : ""}`}
              />
              <input
                type="text"
                name="last"
                autoComplete="off"
                placeholder="Last Name"
                required
                className={`field ${isLoading ? "hidden" : ""}`}
              />
              <input
                type="email"
                name="email"
                autoComplete="off"
                placeholder="Email"
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
          )}
        </div>
      </div>
    </>
  );
}
export default Form;
