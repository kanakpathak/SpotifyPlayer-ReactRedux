import React from "react";

const DisplayHome = ({ spotify_id, accessToken }) => {
  return (
    <div>
      HELLLLLOOOOO WELCOME TO ALBUM with access token {accessToken}
      <br />
      <hr />
      THIS IS YOUR SPOTFY ID {spotify_id}
    </div>
  );
};

export default DisplayHome;
