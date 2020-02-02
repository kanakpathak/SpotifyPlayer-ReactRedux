import React from "react";
// import Button from "@material-ui/core/Button";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import { loginUrl } from "../../api-config";
import { carouselImages } from "../../utils";

const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
`;
const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 200px;
  position: absolute;
  top: calc(50% - 100px);
  left: calc(50% - 150px);
  background-color: rgba(0, 0, 0, 0.5);
`;

const Heading = styled.h1`
  color: white;
`;

const Button = styled.a`
  padding: 5px;
  border: 1px solid white;
  font-size: 18px;
  color: white;
  background: black;
  border-radius: 4px;
`;

const CarouselImage = styled.img`
  height: 100%;
  width: 100%;
`;

const DisplayLogin = ({ text, handleLogin, disabled }) => {
  return (
    <Wrapper>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showArrows={false}
        showIndicators={false}
        thumbWidth={100}
      >
        {carouselImages.map((img, index) => (
          <CarouselImage key={index} src={img} />
        ))}
      </Carousel>

      <LoginCard>
        <Heading>My Music App</Heading>
        <Button href={loginUrl} disabled={disabled}>
          Login to Spotify
        </Button>
        <p>{text}</p>
      </LoginCard>

      {/* <button style={styles.loginBtn}>Login with spotify</button> */}
    </Wrapper>
  );
};

export default DisplayLogin;
