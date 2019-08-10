import React from "react";
import Button from "@material-ui/core/Button";
import { Carousel } from "react-responsive-carousel";

const DisplayLogin = ({ text, handleLogin, disabled }) => {
  return (
    <div>
      {/* <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showArrows={false}
        showIndicators={false}
        thumbWidth="100"
      >
        <div style={styles.container}>
          <img src="https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v3/Wallpaper-v3-400.jpg" />
        </div>
        <div style={styles.container}>
          <img src="https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v3/Wallpaper-v3-400.jpg" />
        </div>
        <div style={styles.container}>
          <img src="https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v3/Wallpaper-v3-400.jpg" />
        </div>
      </Carousel> */}

      <h1 style={{ alignText: "center" }}>LeagueX</h1>
      <Button
        variant="contained"
        color="primary"
        href="http://localhost:3000/api/getAuth"
        onClick={handleLogin}
        disabled={disabled}
      >
        Login to Spotify
      </Button>
      <p>{text}</p>
      {/* <button style={styles.loginBtn}>Login with spotify</button> */}
    </div>
  );
};

export default DisplayLogin;

const styles = {
  container: {
    height: "100vh",
    width: "100%"
  },

  loginbox: {}
};
