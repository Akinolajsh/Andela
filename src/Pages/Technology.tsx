import React from "react";
import styled from "styled-components";
import HeroPage from "./FirstRouterPage/HeroPage";
import SliderPart from "./FirstRouterPage/SliderPart";
import VideoComponent from "./FirstRouterPage/VideoComponent";
import ImageComponent from "./FirstRouterPage/ImageComponent";
import Component9 from "./HomePage/Component9";

const Technology = () => {
  return (
    <div>
      <HeroPage />
      <SliderPart/>
      <VideoComponent/>
      <ImageComponent/>
      <Component9/>
    </div>
  );
};

export default Technology;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`;
