import React from "react";
import Artist from "../container/artist.jsx";
import Album from "../container/album.jsx";
import Track from "../container/track.jsx";
import "../../../assets/css/home.css";

const DisplayHome = () => {
  return (
    <div className="homeContainer">
      <div className="header">
        <h1> MUSIC APP </h1>
      </div>
      <div className="home">
        <div className="artistContainer">
          <Artist />
        </div>
        <div className="albumContainer">
          <Album />
        </div>
        <div className="trackContainer">
          <Track />
        </div>
      </div>
    </div>
  );
};

export default DisplayHome;
