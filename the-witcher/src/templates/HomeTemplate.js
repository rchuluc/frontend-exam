import React from "react";
import VideoList from "../organisms/VideosList";
import Menu from "../organisms/Menu";
import VideoPlayer from "../molecules/VideoPlayer";

const HomeTemplate = ({}) => {
  const _url = "cCXgQ7-Y9ps"; //remove
  return (
    <div className="container">
      <Menu />
      <div className="content">
        <VideoList videoId={_url} />
      </div>
      <VideoPlayer/>
    </div>
  );
};

export default HomeTemplate;
