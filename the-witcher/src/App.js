import React from "react";
import "./styles.css";
import VideosList from "./organisms/VideosList";

function App() {
  return (
    <div className="App">
      <div className="aside-menu"></div>
      <div className="content">

      <VideosList />
      </div>
    </div>
  );
}

export default App;
