import React from "react";
import VideoCard from "../molecules/VideoCard";
import Button from '../atoms/Button'
import bg from "../assets/image.png";

const VideosList = ({}) => {
  return (
    <div className="video-grid">
      <VideoCard
        className=""
        image={bg}
        title={"The Witcher 3: Wild Hunt - Title Reveal"}
      />
      <VideoCard
        className=""
        image={bg}
        title={"The Witcher 3: Wild Hunt - Title Reveal"}
      />
      <VideoCard
        className=""
        image={bg}
        title={"The Witcher 3: Wild Hunt - Title Reveal"}
      />
      <VideoCard
        className=""
        image={bg}
        title={"The Witcher 3: Wild Hunt - Title Reveal"}
      />
            <VideoCard
        className=""
        image={bg}
        
        title={"The Witcher 3: Wild Hunt - Title Reveal"}
      />
            <VideoCard
        className=""
        image={bg}
        title={"The Witcher 3: Wild Hunt - Title Reveal"}
      />
            <VideoCard
        className=""
        image={bg}
        title={"The Witcher 3: Wild Hunt - Title Reveal"}
      />
            <VideoCard
        className=""
        image={bg}
        title={"The Witcher 3: Wild Hunt - Title Reveal"}
      />
            <VideoCard
        className=""
        image={bg}
        title={"The Witcher 3: Wild Hunt - Title Reveal"}
      />
      <Button label={'Load more'}/>
    </div>
  );
};

export default VideosList;
