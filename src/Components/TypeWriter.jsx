import React from "react";
import TypeWriter from "react-typewriter";

class TypingText extends React.Component {
  render() {
    return (
      // Passing in text.

      <div>
        <TypeWriter typing={1.5} class={"typewriter"}>
          Side Pattern is an art, design & media office based in Amsterdam. It
          advances an approach to art and cultural production that is research
          oriented and people focussed - reflective of over a decade of
          experience initiating, consulting and leading on projects across art,
          design, culture, fashion, media and education. Featured in GQ, Black
          Discourse & Guap Magazine. Selected partners and clients include Nike,
          New Balance, Daily Paper, Double A Magazine, Nieuwe Instituut, Dutch
          Design Week, Sandberg Instituut, Design Academy Eindhoven, British
          Council, Whitechapel Gallery, University of Bristol & International
          Curators Forum.
        </TypeWriter>
      </div>
    );
  }
}

export default TypingText;
