import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { divContainer, divX, link } from "../../../assets/css/artist.css";
import { Backdrop } from "@material-ui/core";
import "../../../assets/css/artist.css";

const DisplayArtist = ({ searchArtistName, name, artist, storeArtistId }) => {
  return (
    <div className="displayArtist">
      <div>
        <input
          type="text"
          name="search_box"
          onChange={searchArtistName}
          value={name}
          autoFocus
          placeholder="Search artist"
        />
      </div>
      <div className="artistList">
        {artist.map((item, index) => (
          <div
            className="artist"
            key={index}
            onClick={() => {
              storeArtistId(item["id"]);
            }}
          >
            <div>
              <img
                src={
                  item["images"].length > 0
                    ? item["images"][0]["url"]
                    : "data:image/png;base64,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"
                }
                alt=""
                height="120"
                width="120"
              />
            </div>
            <div className="artistDetail">
              <p>
                <strong>Artist: </strong>
                {item["name"]}{" "}
              </p>
              <p>
                <strong>followers:</strong> {item["followers"]["total"]}{" "}
              </p>
              <p>
                <strong>Genre :</strong> {item["genres"].map(itr => itr + " ")}
              </p>
              <p>
                <strong>Popularity:</strong> {item["popularity"]}
              </p>
            </div>
            {/* <b>Spotify Id:</b>
            {item["id"]} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayArtist;
