import React from "react";
import Button from "@material-ui/core/Button";
import ReactDOM from "react-dom";

import { Carousel } from "react-responsive-carousel";

const DisplayLogin = ({ text, handleLogin, disabled }) => {
  return (
    <div style={styles.container}>
      <Carousel
        width="100%"
        autoPlay={false}
        infiniteLoop={true}
        showThumbs={false}
      >
        <div style={{ width: "100%", backgroundColor: "red" }}>
          <img src="https://i.ytimg.com/vi/c0HX5pg36K4/hqdefault.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div style={{ backgroundColor: "yellow" }}>
          <img src="https://i.ytimg.com/vi/c0HX5pg36K4/hqdefault.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div syyle={{ backgroundColor: "blue" }}>
          <img src="https://i.ytimg.com/vi/c0HX5pg36K4/hqdefault.jpg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
      {/* <h1 style={{ alignText: "center" }}>LeagueX</h1> */}
      {/* <Button
        variant="contained"
        color="primary"
        href="http://localhost:3000/api/getAuth"
        onClick={handleLogin}
        disabled={disabled}
        >
        Login to Spotify
        </Button>
    <p>{text}</p> */}
      {/* <button style={styles.loginBtn}>Login with spotify</button> */}
    </div>
  );
};

export default DisplayLogin;

const styles = {
  container: {
    flex: 1,
    // backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  loginBtn: {}
};
