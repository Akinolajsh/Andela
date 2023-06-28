import React from "react";
import styled from "styled-components";
import Props2 from "../Components/reUse/Props2";
import img from "../Assets/circle-accent-purple.svg"
import img1 from "../Assets/circle-accent-red.svg"
import img2 from "../Assets/circle-accent-yellow.svg"

const Components8 = () => {
  return (
    <div>
      <Container>
        <Main>
            <Props2 title="Case Studies" writeup="fugit aspernatur, in atque delectus ea ipsum eaque earum, deseru" bg="#4a1476" img={img}/>
            <Props2 title="Case Studies" writeup="t minus sit fugit aspernatur, in atque delectus ea ipsum eaque earum, deserunt esse molestias est at?" bg="#701340" img={img1}/>
            <Props2 title="Case Studies" writeup="delectus ea ipsum eaque earum, deserunt esse molestias est at?" bg="#c95227" img={img2}/>
        </Main>
      </Container>
    </div>
  );
};

export default Components8;

const Main = styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
overflow: hidden;
`;
const Container = styled.div`
width: 100%;
height: 450px;
display: flex;
justify-content: center;
align-items: center;
background-color: red;
`;
