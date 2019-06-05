import React from "react";
import VideoList from "../organisms/VideosList";
import Menu from "../organisms/Menu";
import VideoPlayer from '../molecules/VideoPlayer'

const HomeTemplate = ({}) => {

  const _url = 'http://www.youtube.com/embed/cCXgQ7-Y9ps' //remove
  return (
    <div className="container">
      <Menu />
      <div className="content">
        <VideoList />
      </div>
      <VideoPlayer videoUrl={_url}/>
    </div>
  );
};

export default HomeTemplate;
