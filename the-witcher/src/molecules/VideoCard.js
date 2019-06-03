import React from "react";
import VideoThumb from "../atoms/VideoThumb";
import VideoLabel from "../atoms/VideoLabel";

const VideoCard = ({ image, title }) => {
  return (
    <div className="video-card">
      <VideoThumb image={image}>
        <VideoLabel title={title} />
      </VideoThumb>
    </div>
  );
};

export default VideoCard;
