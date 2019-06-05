import React from "react";
import "../styles.css";

const VideoFrame = () => {
  const width = window.screen.width * 0.65;
  const height = window.screen.height * 0.6;

  return (
    <div className="video-frame">
      <iframe
        id="videoEmbedded"
        allowFullScreen={true}
        frameBorder="0"
        width={width}
        height={height}
      />
    </div>
  );
};

export default VideoFrame;
