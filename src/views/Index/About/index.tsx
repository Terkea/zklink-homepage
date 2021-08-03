import React from "react";
import styled from "styled-components";
import EarthUrl from './../../../assets/images/earth.png'
import About1Url from './../../../assets/images/about1.png'
import About2Url from './../../../assets/images/about2.png'
import About3Url from './../../../assets/images/about3.png'
import About4Url from './../../../assets/images/about4.png'
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
    grid-template-columns: repeat(4, minmax(0, 1fr));
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
  img {
    width: 100%
  }
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

const GridTextListItem = styled(GridText)`
  position: relative;
  margin: 0;
  text-align: left;
  font-size: 12px;
  line-height: 20px;
  color: #7A7B7C;
  word-break: break-all;
  padding-left: 10px;
  &.grid-list-item {
    margin-top: 10px
  }
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #04D299;
    left: 0;
    top: 7px;
  }
`

const About = () => {

  return (
    <Wrap>
      <Section>
        <SectionTitle>
          About zkLink
        </SectionTitle>
        <Text>
          zkLink is a trustless chain-to-chain DEX based on zero-knowledge technology. Our community is devoted to providing decentralized and permissionless DeFi scenarios with cross-chain tokens in a sleek user experience. Come and explore!
        </Text>

        <Grid>
          <GridItem>
            <Icon>
              <img src={About1Url} alt=""/>
            </Icon>
            <GridTitle>Swap</GridTitle>
            <GridText>Direct swapping with multi-chain tokens by zero-knowledge technique.</GridText>
            <GridTextListItem className="grid-list-item">Based on AMM model.</GridTextListItem>
            <GridTextListItem>Instant finality of transactions, compared with a long wait-time of other cross-chain solutions.</GridTextListItem>
            <GridTextListItem>No intermediary required, as direct liquidity pairs composed with native assets from separate chains are built.</GridTextListItem>
          </GridItem>
          <GridItem>
            <Icon>
              <img src={About2Url} alt=""/>
            </Icon>
            <GridTitle>L2 StableSwap</GridTitle>
            <GridText>Liquidity pools composed with the same kind of tokens on separate chains, such as USDT (ERC-20) - USDT (BEP-20), with a stablecoin-specialized AMM curve and lower slippage.</GridText>
          </GridItem>
          <GridItem>
            <Icon>
              <img src={About3Url} alt=""/>
            </Icon>
            <GridTitle>Fast Cross Chain Swap</GridTitle>
            <GridText>Fast cross-chain transaction service for some pairs, where traders can enjoy chain interoperability on Layer1 without depositing tokens to zkLink Layer2 in advance. The validity of cross-chain transactions is guaranteed with recursive SNARKs.</GridText>
          </GridItem>
          <GridItem>
            <Icon>
              <img src={About4Url} alt=""/>
            </Icon>
            <GridTitle>Widget & SDK</GridTitle>
            <GridText>A brand new deposit channel for third-party DeFi projects in forms of widget or SDK, where their users can enjoy fast cross chain swapping without leaving their platforms, such as Vaults, Lending, etc. </GridText>
          </GridItem>
        </Grid>
      </Section>
    </Wrap>
  )
}

export default About