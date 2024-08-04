import React from 'react';
import ReactPlayer from 'react-player';

function VideoPlayer() {
  return (
    <>
    <div className='video-container'>
    <ReactPlayer
      url="<https://youtu.be/_uez2GNZZ7c>"
      width="100%"
      height="100%"
      playing
      light
      loop
      autoplay="true"
      
    />
    </div>
    </>
  );
}

export default VideoPlayer;