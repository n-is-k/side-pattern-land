import React from "react";
import TypingText from "./TypeWriter";

function Header() {
  return (
    <>
      <div className="header">
        <div className="typing">
          {" "}
          <TypingText />
        </div>
      </div>
      <div className="header-nav">
        <div className="typing"> </div>
        <div className="navigation">
          <ul></ul>
        </div>
      </div>
    </>
  );
}

export default Header;
