import React, { useState } from "react";
import styled from "styled-components";
import img from "../../Assets/LogoWhite.png";
import GlobalButton from "../reUse/GlobalButton";
import { FaAngleDown } from "react-icons/fa";
import img2 from "../../Assets/Logo.svg"
import { Link} from "react-router-dom";

const Header = () => {
  const [scroll, setScroll] = useState<boolean>(false);

  const onScroll = () => {
    if (window.scrollY >= 70) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", onScroll)

  return (
    <div>
     {
      scroll ? (
        <Container style={{backgroundColor: "#fbfbfb", color:"black", transition: "all 500ms"}}>
        <Main>
          <Logo src={img2} />
          <NavHolder>
            <Nav to="/page1">For Technology Experts</Nav>
            <Nav to="">Business</Nav>
            <Nav to="">Enterprise</Nav>
          </NavHolder>
          <ButtonHolder>
            <Nav to="">Apply for Jobs</Nav>
            <GlobalButton
              width="130px"
              height="35px"
              brad="20px"
              bg="#56c870"
              title="Hire Talent"
            />
            <Nav1>
              Login <Icon />
            </Nav1>
          </ButtonHolder>
        </Main>
      </Container>
      ):(
        <Container>
        <Main>
          <Logo src={img} />
          <NavHolder>
            <Nav to="/page1">For Technology Experts</Nav>
            <Nav to="">Business</Nav>
            <Nav to="">Enterprise</Nav>
          </NavHolder>
          <ButtonHolder>
            <Nav to="">Apply for Jobs</Nav>
            <GlobalButton
              width="130px"
              height="35px"
              brad="20px"
              bg="#56c870"
              title="Hire Talent"
            />
            <Nav1>
              Login <Icon />
            </Nav1>
          </ButtonHolder>
        </Main>
      </Container>
      )
     }
    </div>
  );
};

export default Header;

const Icon = styled(FaAngleDown)`
  color: white;
`;
const Nav1 = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 350px;
`;
const Nav = styled(Link)`
  text-decoration: none;
`;

const NavHolder = styled.div`
  display: flex;
  width: 450px;
  justify-content: space-between;
`;
const Logo = styled.img`
  width: 200px;
`;
const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: transparent;
  position: absolute;
  position: fixed;
  top: 60px;
  z-index: 10;
  text-decoration: none;
`;
