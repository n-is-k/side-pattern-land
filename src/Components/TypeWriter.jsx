import React from "react";
import TypeWriter from "react-typewriter";

class TypingText extends React.Component {
  render() {
    return (
      // Passing in text.

      <div
        style={{
          color: "grey",
          textDecoration: "none",
          underline: "none",
        }}
      >
        {/* <TypeWriter typing={1.5} class={"typewriter"}>
       Side Pattern is an art, design & media office based in Amsterdam. It
          advances an approach to art and cultural production that reflects
          what's happening outside and in our community. Reflective of over a
          decade initiating, consulting and leading on projects across art,
          design, culture, fashion, media and education the office provides a
          bespoke consultancy service rooted in an ongoing line of cultural
          research. Featured in Guap Magazine & The Black Discourse. Selected
          partners and clients include Nike, New Balance, Daily Paper, Double A
          Magazine, Nieuwe Instituut, Dutch Design Week, Sandberg Instituut,
          Design Academy Eindhoven, British Council, Whitechapel Gallery,
          University of Bristol & International Curators Forum. Side Pattern is
          currently Kirtis Clarke, Zaina Pakabomba & Liam Wilson alongside a
          network of artists, cultural practitioners, designers and researchers.
        </TypeWriter> */}
        <h2>
          Side Pattern is an art, design and cultural studio based in Amsterdam.
          It builds brands, digital experiences, and cultural research for
          clients — while quietly producing its own films, objects, and
          community. Home of 'Can't Talk.'
        </h2>
        <h2
          style={{
            color: "white",
            textDecoration: "none",
            underline: "none",
          }}
        >
          "Can't Talk: LAAX" Tee — Limited Run.<br></br>
          <br></br> Worn in the film.
          <br></br> Made for the community.
          <br></br> <br></br>{" "}
          <a
            href="https://forms.gle/nBsxFUHMuuRQHAww9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p
              style={{
                color: "white",
                textDecoration: "none",
                underline: "none",
              }}
            >
              Order yours here
            </p>
            <p
              style={{
                color: "white",
                textDecoration: "none",
                underline: "none",
              }}
            >
              Not ready to order? No worries, sign up below and we'll let you
              know when the next drop is.
            </p>
          </a>
        </h2>
      </div>
    );
  }
}

export default TypingText;
