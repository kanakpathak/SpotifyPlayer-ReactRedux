import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { divContainer, divX, link } from "../../../assets/css/artist.css";
import DisplayArtist from "./DisplayArtist.jsx";
import Artist from "../container/artist.jsx";
import Album from "../container/album.jsx";
import Track from "../container/track.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const DisplayHome = () => {
  return (
    <div className="row">
      <div className="col-sm-3">
        <Artist />
      </div>
      <div className="col-sm-6">
        <Album />
      </div>
      <div className="col-sm-3">
        <Track />
      </div>
    </div>
  );
};

export default DisplayHome;
