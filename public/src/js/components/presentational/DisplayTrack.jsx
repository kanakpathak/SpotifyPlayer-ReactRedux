import React from "react";

const DisplayTrack = ({ tracks, albumId }) => {
  return (
    <div>
      {tracks.map((item, index) => (
        <button key={index}>
          <b>{item["name"]}</b>
          <b>{item["preview_url"]}</b>
          <b>{albumId}</b>
        </button>
      ))}
    </div>
  );
};

export default DisplayTrack;
