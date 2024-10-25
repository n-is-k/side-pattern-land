import React from "react";
import TypeWriter from "react-typewriter";

class TypingText extends React.Component {
  render() {
    return (
      // Passing in text.

      <TypeWriter typing={1} class={"typewriter"}>
        Side Pattern is the art and design office of Kirtis Clarke currently
        based in Amsterdam. It advances an approach to art and cultural
        production that’s reflective of over 10 years of experience consulting
        across art, design, culture, fashion, media and education.{" "}
      </TypeWriter>
    );
  }
}

export default TypingText;
