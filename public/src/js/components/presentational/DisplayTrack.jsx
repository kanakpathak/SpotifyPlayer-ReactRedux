import React from "react";

const DisplayTrack = ({ tracks, albumId }) => {
  return (
    <div>
      {tracks.map((item, index) => (
        <button key={index}>
          <b>{item["name"]}</b>
          <audio controls>
            <source src={item["preview_url"]} type="audio/mpeg" /> Sorry
          </audio>
          {/* <b>{item["preview_url"]}</b>
          <b>{albumId}</b> */}
        </button>
      ))}
    </div>
  );
};

export default DisplayTrack;
