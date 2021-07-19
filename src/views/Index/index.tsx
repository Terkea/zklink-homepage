import React from "react";
import Nav from "./Nav";
import styled from "styled-components";
import Main from "./Main";
import Statistics from "./Statitatics";
import satelliteUrl from './../../assets/images/main-bg.png'
import About from "./About";
import WhitePaper from "./WhitePaper";
import Roadmap from "./Roadmap";
import Footer from "./Foooter";
import {device} from "../../styles/media";
import Eco from "./Eco";

const Wrapper = styled.div`
  background-image: url('${satelliteUrl}');
  background-position: center 80px;
  /* background-size: 1000px auto; */
  background-repeat: no-repeat;
  @media ${device.sm} {
    background-size: 1200px auto;
  }
`


const Index = () => {

  return (
    <Wrapper>
      <Nav />
      <Main />
      <Statistics />
      <About />
      <WhitePaper />
      <Roadmap />
      <Eco />
      <Footer />
    </Wrapper>
  )
}
export default Index