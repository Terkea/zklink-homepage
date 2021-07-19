import React from "react";
import styled from "styled-components";
import {SectionTitle} from "../../../styles";
import satelliteUrl from "../../../assets/images/roadmap-satellite.png";
import roadmapLineUrl from "../../../assets/images/roadmap.png";
import roadmapLineUrl2x from "../../../assets/images/roadmap@2x.png";
import roadmapLineMobileUrl from "../../../assets/images/roadmap-line-m@2x.png";
import {device} from "../../../styles/media";
const Wrap = styled.div`
  position: relative;
  padding: 80px 0 0;
  @media ${device.md} {
    padding: 80px 0 0;
  }
`
const Satellite = styled.img.attrs({
  src: satelliteUrl,
})`
  width: 80%;
  position: absolute;
  top: 150px;
  left: 0;
  
  @media ${device.md} {
    width: auto;
  }
`
const Section = styled.div`
  max-width: 1087px;
  margin: 0 auto;
`
const Road = styled.div`
  padding: 100px 0 100px;
  position: relative;
  
  @media ${device.lg} {
    padding: 177px 0 258px;
  }
`
const Line = styled.div`
  width: 100%;
  user-select: none;
  img {
    width: 100%;
  }
`
const LineMobile = styled.div`
  width: 6px;
  position: relative;
  top: 8px;
  background-image: url(${roadmapLineMobileUrl});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center 0;


`
const LineMap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  padding: 0 24px;
  ${LineMobile} {
    display: block;
    margin-right: 24px;
  }
  ${Line} {
    display: none;
  }
  
  @media ${device.lg} {
    display: block;
    padding: 0;
    ${Line} {
      display: block;
    }
    ${LineMobile} {
      display: none;
    }
  }
`
const DotGroup = styled.div`
  
`
const EventDot = styled.div`
  
  @media ${device.lg} {
    position: absolute;
    width: 42px;
    height: 42px;
  }
  //background: rgba(255,255,255,.8);
`
const Dot1 = styled(EventDot)`
  top: 19.34%;
  left: 0;
`
const Dot2 = styled(EventDot)`
  top: 33.7%;
  left: 23.8%;
`
const Dot3 = styled(EventDot)`
  top: 75%;
  left: 42.75%;
`
const Dot4 = styled(EventDot)`
  top: 0;
  left: 70.35%;
`
const EventContent = styled.div`
  margin: -4px 0 0;
  transition: color .4s ease;
  color: rgba(189, 191, 198, 1);
  padding-bottom: 40px;
  
  &:hover {
    color: white;
  }
  @media ${device.md} {
  }
  
  @media ${device.lg} {
    height: 144px;
    width: 330px;
    margin: 0;
    position: absolute;
  }
`
const EventDown = styled(EventContent)`
  top: 60px;
  left: 0;
`
const EventUp = styled(EventContent)`
  bottom: 60px;
  left: 0;
`
const EventTitle = styled.div`
  font-size: 22px;
  line-height: 30px;
  font-weight: 500;
  background: -webkit-linear-gradient(#03D498, #3C67E9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  
  &:before {
    content: '';
    width: 40px;
  }
`
const EventRow = styled.div`
  font-size: 14px;
  line-height: 22px;
  @media ${device.lg} {
    margin-top: 4px;
  }
`
const CircleMobile = styled.div`
  position: absolute;
  top: 4px;
  left: -37px;
  width: 20px;
  height: 20px;
  background-image: linear-gradient(to right, rgba(4, 210, 153, .3), rgba(60, 103, 233, .3));
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  display: flex;
  
  &:after {
    content: '';
    width: 8px;
    height: 8px;
    background-image: linear-gradient(-270deg, rgba(4, 210, 153, .9), rgba(60, 103, 233, .8));
    border-radius: 50%;
  }
  
  @media ${device.lg} {
    display: none;
  }
`
const Roadmap = () => {

  return (
    <Wrap>
      <Satellite />
      <Section>
        <SectionTitle>Roadmap</SectionTitle>
        <Road>
          <LineMap>
            <Line>
            <picture>
              <source srcSet={`${roadmapLineUrl}, ${roadmapLineUrl2x} 2x`} media="(min-width: 1000px)" />
              <img />
            </picture>
            </Line>
            <LineMobile />
            <DotGroup>
              <Dot1>
                <EventDown>
                  <EventTitle><CircleMobile />2021Q2</EventTitle>
                  <EventRow>1. Launch the testnet</EventRow>
                  <EventRow>2. Support swapping with multi-chain assets</EventRow>
                </EventDown>
              </Dot1>
              <Dot2>
                <EventUp>
                  <EventTitle><CircleMobile />2021Q3</EventTitle>
                  <EventRow>1. Launch zkLink mainnet V1</EventRow>
                  <EventRow>2. Support cross-chain farming and staking</EventRow>
                  <EventRow>3. Support concentrated liquidity of Uniswap V3</EventRow>
                  <EventRow>4. Support limit orders</EventRow>
                </EventUp>
              </Dot2>
              <Dot3>
                <EventDown>
                  <EventTitle><CircleMobile />2021Q4</EventTitle>
                  <EventRow>1. Launch zkLink V2</EventRow>
                  <EventRow>2. Support lending</EventRow>
                  <EventRow>3. Support yield aggregator</EventRow>
                </EventDown>
              </Dot3>
              <Dot4>
                <EventUp>
                  <EventTitle><CircleMobile />2022Q1</EventTitle>
                  <EventRow>1. Launch zkLink V3</EventRow>
                  <EventRow>2. Support more public chains</EventRow>
                  <EventRow>3. Support NFT</EventRow>
                </EventUp>
              </Dot4>
            </DotGroup>
          </LineMap>

        </Road>
      </Section>
    </Wrap>
  )
}

export default Roadmap