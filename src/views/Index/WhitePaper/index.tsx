import React from "react";
import styled from "styled-components";
import zklUrl from "./../../../assets/images/zkl-wp.png"
import tokenUrl from "./../../../assets/images/token.png"
import paperUrl from "./../../../assets/images/paper.png"
import arrowUrl from "./../../../assets/images/arrow-right.png"
import gradientBgUrl from "./../../../assets/images/whitepaper-bg-1.png"
import satelliteUrl from "./../../../assets/images/whitepaper-satellite.png"
import { SectionTitle } from "../../../styles";
import {device} from "../../../styles/media";

const Wrap = styled.div`
  position: relative;
`
const Section = styled.div`
  max-width: 1066px;
  padding: 64px 20px 0;
  margin: 0 auto;
  text-align: left;
  position: relative;
  @media ${device.xl} {
    padding: 126px 0 0;
    
  }
`
const Satellite = styled.img.attrs({
  src: satelliteUrl,
})`
  width: 80%;
  position: absolute;
  bottom: -20%;
  right: 0;
  @media ${device.sm} {
  }
  @media ${device.xl} {
  }
`
const GradientBg = styled.img.attrs({
  src: gradientBgUrl,
})`
  width: 90%;
  position: absolute;
  top: 50%;
  left: 0;
  @media ${device.sm} {
    top: 20%;
    width: 80%;
  }
  @media ${device.xl} {
    top: -20%;
    width: auto;
  }
`
const Grid = styled.div`
  display: flex;
  height: auto;
  flex-direction: column;
  max-width: 600px;
  margin: 40px auto 0;

  @media ${device.xl} {
    max-width: none;
    flex-direction: row;
  }
`
const GridItem = styled.div`
  /* background-color: rgba(23, 23, 23, .8); */
  border-radius: 18px;
  padding: 38px 0 24px;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  text-align: left;

  //backdrop-filter: blur(30px);
  //filter: blur(30px);
  /* transition: background-color .5s ease; */
  &:hover {
    /* background-color: rgba(40, 40, 41, 1); */
  }

  @media ${device.xl} {
    margin-top: 0;
  }
`
const GridRight = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  padding: 0 0 0;
  flex-direction: column;
  @media ${device.xl} {
    padding: 100px 0 0;
  }
`
const GridH3 = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
`
const GridText = styled.div`
  color: #9B9C9D;
  line-height: 22px;
  font-size: 14px;
  margin-top: 20px;
  padding: 0 0 20px;
  text-align: left;
  flex: 1;
`
const ZKL = styled(GridItem)`
  width: 100%;
  position: relative;
  padding-top: 24px;
  height: auto;
  margin-right: 110px;
  
  
  img {
    width: 70%;
    margin: 0 auto;
  }
  
  ${GridH3} {
    font-size: 40px;
    font-weight: 500;
  }

  @media ${device.sm} {
    img {
      width: 40%;
    }
  }
  @media ${device.xl} {
    width: 450px;
    img {
      width: auto;
      position: relative;
      left: -60px;
    }
  }
`
const GridFoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Coming = styled.div`
  color: #fff;
  font-size: 12px;
`
const Arrow = styled.img.attrs({
  src: arrowUrl
})`
  width: 39px;
  height: 39px;
`
const Line = styled.div`
  height: 1px;
  background: linear-gradient(270deg, #3C67E9 0%, #04D299 100%);
`
const Line2 = styled(Line)`
  display: block;
  @media ${device.xl} {
    display: none;
  }
`
const WhitePaper = () => {


  return (
    <Wrap>
      {/* <GradientBg /> */}
      <Satellite />
      <Section>
        <SectionTitle>Documentation</SectionTitle>
        <Grid>
          <ZKL>
            <img src={zklUrl} alt=""/>
            <GridH3><b>ZKL</b></GridH3>
            <GridText>ZKL is the governance token of zkLink, which is standardized with ERC20. The future development of zkLink will be voted on by DAO. There are three major scenarios for ZKL tokens: staking node, proposal initiation, and voting.</GridText>
          </ZKL>
          <Line2 />
          <GridRight>
            <GridItem>
              <GridH3>Token Economy<Arrow></Arrow></GridH3>
              <GridText>The detailed information of ZKL, its usage scenarios, its allocation model and the deflation model are explained in this paper.</GridText>
              <GridFoot>
                <Coming>Coming soon</Coming>
                
              </GridFoot>
            </GridItem>
            <Line />
            <GridItem>
              <GridH3>Whitepaper<Arrow></Arrow></GridH3>
              <GridText>The whitepaper elaborates how zkLink implement zero-knowledge techniques and DAO governance model to guarantee the security and consistency of multi-chain interoperability, and to create multi-chain DeFi scenarios such as trading, loaning and revenue aggregating with a safe, eﬀicient and low-cost user experience.</GridText>
              <GridFoot>
                <Coming>Coming soon</Coming>
                
              </GridFoot>
            </GridItem>
          </GridRight>
        </Grid>

      </Section>
    </Wrap>
  )
}

export default WhitePaper