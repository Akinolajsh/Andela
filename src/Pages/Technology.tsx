import React from "react";
import styled from "styled-components";
import HeroPage from "./FirstRouterPage/HeroPage";
import SliderPart from "./FirstRouterPage/SliderPart";
import VideoComponent from "./FirstRouterPage/VideoComponent";

const Technology = () => {
  return (
    <div>
      <HeroPage />
      <SliderPart/>
      <VideoComponent/>
    </div>
  );
};

export default Technology;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`;
