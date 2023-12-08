import React from 'react';
import ReactPlayer from 'react-player';
import './video.css'; // Make sure to create this CSS file for styling the video.

const Video = () => {
  return (
    <div className="video-background">
      <ReactPlayer
        url="videos/Growing_Tree_1.mp4"
        playing={true}
        loop={true}
        muted={true}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Video;
