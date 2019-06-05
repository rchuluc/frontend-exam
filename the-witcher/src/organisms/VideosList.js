import React from "react";
import VideoCard from "../molecules/VideoCard";
import bg from "../assets/image.png";

const VideosList = ({}) => {
  return (
    <div className="video-grid">
      <VideoCard
        thumbnail={bg}
        title={"The Witcher 3: Wild Hunt - Title Reveal"}
      />

      <button className="btn">load more</button>
    </div>
  );
};

export default VideosList;
