import React from "react";
import styled from "styled-components";
import Props1 from "../Components/reUse/Props1";
import img from "../Assets/user.png"
import img2 from "../Assets/Adeyinka-Alabi-2-Talent-homepage-150x150.jpg"
import img3 from "../Assets/Adetola-Ahmed-talent-profile-150x150.jpg"
import img4 from "../Assets/Rafael-Henrique-talent-profile-150x150.jpg"

// const data:any=[
//     {
//         name: "Tony",
//         text: "Obi is a boy",
//         bg: "#56c870",
//         state: "United States",
//         img: "../Assets/user.png",
//     },
//     {
//         name1: "Matt",
//         text1: "",
//         bg1: "",
//         state1: "Great Britain",
//         img1: "",
//     },
//     {
//         name2: "Alexander",
//         text2: "",
//         bg2: "",
//         state2: "United States",
//         img2: "",
//     },
//     {
//         name3: "Adetola",
//         text3: "",
//         bg3: "",
//         state3: "Nigeria",
//         img3: "",
//     },
//     {
//         name4: "Adeyinka",
//         text4: "",
//         bg4: "",
//         state4: "Nigeria",
//         img4: "",
//     },
//     {
//         name5: "Kaji",
//         text5: "",
//         bg5: "",
//         state5: "Great Britain",
//         img5: "",
//     },
//     {
//         name: "Makan",
//         text6: "",
//         bg6: "",
//         state6: "United States",
//         img6: "",
//     },
//     {
//         name7: "Rafel",
//         text7: "",
//         bg7: "",
//         state7: "Brazil",
//         img7: "",
//     },
//     {
//         name8: "Florence",
//         text8: "",
//         bg8: "",
//         state8: "Kenya",
//         img8: "",
//     },
//     {
//         name8: "ML",
//         text8: "",
//         bg8: "",
//         state8: "United States",
//         img8: "",
//     },
// ]

const Slider = () => {
  return (
    <div>
      <Container>
       <Props1 name1="Alexander" bg="#fdf0dc" text="Good engineers, who have worked with us for years!" state="United states" img={img}/>
       <Props1 name1="ML" bg="#b0d6ce" text="We started with Andela in a 'staff aug' capacity as a pilot to evaluate the strength of folks they could bring to the table. Our experience to date" state="United states" img={img}/>
       <Props1 name1="Adetola" bg="#fdf0dc" text="I'm seeing more diverse, like Saleforce, DevOps. Different opportunities I'm starting to take advantages of." state="Nigeria" img={img3}/>
       <Props1 name1="Adeyinka" bg="#fce1e1" text="Andela has helped me to believe, dream big, break barriers, to do the impossible" state="Nigeria" img={img2}/>
       <Props1  name1="Rafael" bg="#ebe0ff" text="A few months have passed, and I have absolutely no regrets. My career fast-Forwarded in about five years to what I was expecting." state="Brazil" img={img4}/>
       <Props1  name1="Florence" bg="#b0d6ce" text="Working wtih Andela team has great. They know thier work and are professional" state="Kenya" img={img}/>
       <Props1  name1="Matt" bg="#fce1e1" text="A fantastic service providing top quality Technical Support Engineers!" state="Great Britain" img={img}/>
       <Props1  name1="Makan" bg="#ebe0ff" text="Working with Andela is one of the most important and best decisions we have made so far as an early stage." state="United States" img={img}/>
      </Container>
    </div>
  );
};

export default Slider;

const Container = styled.div`
  width: 100%;
  height: 350px;
  /* background-color: red; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
  overflow: hidden;
`;
