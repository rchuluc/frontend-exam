import React from "react";
import "../styles.css";

const VideoFrame = ({ videoUrl }) => {
  const width = window.screen.width * 0.65;
  const height = window.screen.height * 0.60;

  return (
      <div className="video-frame">
          <iframe
            allowfullscreen="true"
            frameBorder = "0"
            width={width}
            height={height}
            src={videoUrl}
          />
      </div>
  );
};

export default VideoFrame;
