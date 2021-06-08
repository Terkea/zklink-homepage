import React from "react";
import styled from "styled-components";
import zklUrl from "./../../../assets/images/ZKL.png"
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
  text-align: center;
  position: relative;
  
  @media ${device.xl} {
    padding: 126px 0 0;
    
  }
`
const Satellite = styled.img.attrs({
  src: satelliteUrl,
})`
  width: 280px;
  position: absolute;
  top: 30%;
  right: 0;
  @media ${device.sm} {
    width: 380px;
  }
  @media ${device.xl} {
    top: 33%;
    width: 430px;
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
    height: 698px;
  }
`
const GridItem = styled.div`
  background-color: rgba(23, 23, 23, .8);
  border-radius: 18px;
  padding: 24px;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  //backdrop-filter: blur(30px);
  //filter: blur(30px);
  transition: background-color .5s ease;
  &:hover {
    background-color: rgba(40, 40, 41, 1);
  }


  @media ${device.xl} {
    height: 337px;
    margin-top: 0;
    text-align: left;
  }
`
const GridRight = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`
const GridH3 = styled.div`
  font-size: 20px;
`
const GridText = styled.div`
  color: rgba(189, 191, 198, .8);
  line-height: 22px;
  font-size: 14px;
  margin-top: 16px;
  padding: 0 0 20px;
  flex: 1;
`
const ZKL = styled(GridItem)`
  width: 100%;
  position: relative;
  padding-top: 24px;
  height: auto;
  margin-right: 24px;
  text-align: center;
  
  img {
    width: 70%;
    margin: 0 auto 40px;
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
    width: 430px;
    height: 698px;
    padding-top: 451px;
    img {
      position: absolute;
      top: 0;
      right: 32px;
      width: auto;
    }
  }

  
`
const GridIcon = styled.div`
  margin-bottom: 24px;
  img {
    height: 60px;
  }
  @media ${device.md} {
    img {
      height: auto;
    }
  }
`
const GridFoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Coming = styled.div`
  color: rgba(105, 110, 112, 1);
  font-size: 12px;
`
const Arrow = styled.img.attrs({
  src: arrowUrl
})`
  width: 39px;
  height: 39px;
`

const WhitePaper = () => {


  return (
    <Wrap>
      <GradientBg />
      <Satellite />
      <Section>
        <SectionTitle>zkLink Whitepaper</SectionTitle>
        <Grid>
          <ZKL>
            <img src={zklUrl} alt=""/>
            <GridH3><b>ZKL</b></GridH3>
            <GridText>ZKL is the governance token of zkLink, which is standardized with ERC20. The future development of zkLink will be voted on by DAO. There are three major scenarios for ZKL tokens: staking node, proposal initiation, and voting.</GridText>
          </ZKL>
          <GridRight>
            <GridItem>
              <GridIcon><img src={tokenUrl} alt=""/></GridIcon>
              <GridH3>Token Economy</GridH3>
              <GridText>The detailed information of ZKL, its usage scenarios, its allocation model and the deflation model are explained in this paper.</GridText>
              <GridFoot>
                <Coming>Coming soon</Coming>
                <Arrow></Arrow>
              </GridFoot>
            </GridItem>
            <GridItem>
              <GridIcon><img src={paperUrl} alt=""/></GridIcon>
              <GridH3>Whitepaper</GridH3>
              <GridText>The whitepaper elaborates how zkLink implement zero-knowledge techniques and DAO governance model to guarantee the security and consistency of multi-chain interoperability, and to create multi-chain DeFi scenarios such as trading, loaning and revenue aggregating with a safe, eﬀicient and low-cost user experience.</GridText>
              <GridFoot>
                <Coming>Coming soon</Coming>
                <Arrow></Arrow>
              </GridFoot>
            </GridItem>
          </GridRight>
        </Grid>

      </Section>
    </Wrap>
  )
}

export default WhitePaper