import React from "react";
import "../../../assets/css/tracks.css";

const DisplayTrack = ({ tracks, albumId }) => {
  return (
    <div className="displayTrack">
      {tracks.map((item, index) => (
        <div className="trackList" key={index}>
          <h6>{item["name"]}</h6>
          <audio controls>
            <source src={item["preview_url"]} type="audio/mpeg" /> Sorry
          </audio>
          {/* <b>{item["preview_url"]}</b>
          <b>{albumId}</b> */}
        </div>
      ))}
    </div>
  );
};

export default DisplayTrack;
