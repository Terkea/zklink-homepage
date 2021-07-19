import React from "react";
import styled from "styled-components";
import EarthUrl from './../../../assets/images/earth.png'
import About1Url from './../../../assets/images/about1.png'
import About2Url from './../../../assets/images/about2.png'
import About3Url from './../../../assets/images/about3.png'
import { SectionTitle } from "../../../styles";
import {device} from "../../../styles/media";
const Wrap = styled.div`
  background-image: url('${EarthUrl}');
  background-size: 350% auto;
  background-position: center 0;
  background-repeat: no-repeat;
  @media ${device.sm} {
    background-size: 250% auto;
  }
  
  @media ${device.xl} {
    background-size: cover;
  }
`
const Section = styled.div`
  max-width: 1066px;
  padding: 280px 20px 0;
  margin: 0 auto;
  text-align: center;
  @media ${device.md} {
    padding: 374px 20px 0;
  }
`
const Text = styled.h4`
  font-size: 18px;
  line-height: 26px;
  color: rgba(255,255,255,.9);
  font-weight: 300;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-row-gap: 72px;
  grid-column-gap: 20px;
  max-width: 600px;
  margin: 146px auto 0;

  @media ${device.sm} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  @media ${device.md} {
    max-width: none;
    grid-row-gap: 22px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`
const GridItem = styled.div`
  background-color: rgba(23, 23, 23, 1);
  text-align: center;
  padding: 0 24px 32px;
  min-height: 320px;
  transition: background-color .5s ease;
  border-radius: 18px;
  &:hover {
    background-color: rgba(40, 40, 41, 1);
  }
`
const Icon = styled.div`
  width: 124px;
  height: 124px;
  margin: -62px auto 0;
`
const GridTitle = styled.div`
  //display: flex;
  //align-items: center;
  //justify-content: center;
  font-weight: 500;
  font-size: 22px;
  line-height: 30px;
  margin-top: 8px;
  @media ${device.md} {
    min-height: 60px;
  }
`
const GridText = styled.div`
  line-height: 22px;
  margin-top: 24px;
  color: rgba(149, 152, 163, 1);
`
const About = () => {

  return (
    <Wrap>
      <Section>
        <SectionTitle>
          About zkLink
        </SectionTitle>
        <Text>
          zkLink is a multi-chain integration DEX based on ZK-Rollup. Our community is devoted to build a decentralized and comprehensive platform for financial scenarios. Come and join us!
        </Text>

        <Grid>
          <GridItem>
            <Icon>
              <img src={About1Url} alt=""/>
            </Icon>
            <GridTitle>“One-Click” Cross-Chain Trading</GridTitle>
            <GridText> zkLink supports one-click swapping with assets on different chains. The Layer2 liquidity pool model refers to Uniswap V3  so that the user experience is further improved by concentrated liquidity and real-time trading.</GridText>
          </GridItem>
          <GridItem>
            <Icon>
              <img src={About2Url} alt=""/>
            </Icon>
            <GridTitle>Asset Security</GridTitle>
            <GridText>Compared to cross-chain bridges, zkLink's Layer2 network is built by ZK-Rollup technology, so that direct transactions can be achieved without a third-party. In this manner, asset security is guaranteed.</GridText>
          </GridItem>
          <GridItem>
            <Icon>
              <img src={About3Url} alt=""/>
            </Icon>
            <GridTitle>Lower Fees, Higher TPS</GridTitle>
            <GridText>zkLink helps users to considerably save transaction fees with no hidden cross-chain costs. Thanks to the implementation of ZK-Rollup, our TPS has been appproved by several orders of magnitude.</GridText>
          </GridItem>
        </Grid>
      </Section>
    </Wrap>
  )
}

export default About