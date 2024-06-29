import React from 'react';
import TypeWriter from 'react-typewriter';

class TypingText extends React.Component {

  render() {

    return (
      // Passing in text.
     
      <TypeWriter typing={1} class={'typewriter'}>Side Pattern is a creative community developing special projects across art, design and fashion.<br/> Join to find out more.</TypeWriter> 
    );
  }
  }



export default TypingText;