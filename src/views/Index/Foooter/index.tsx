import React from "react";
import styled from "styled-components";
import {device} from "../../../styles/media";
import Community from "./Community";
import logoUrl from './../../../assets/images/logo.png'

const Wrap = styled.div`
  position: relative;
  z-index: 10;
`
const Section = styled.div`
  display: flex;
  border-top: 1px solid rgba(255, 255, 255, .23);
  padding: 32px 20px 60px;
  flex-wrap: wrap;
  margin: 0 auto;

  @media ${device.lg} {
    max-width: 980px;
    padding-left: 0;
    padding-right: 0;

  }
  @media ${device.xl} {
    max-width: 1068px;
    
  }
`

const GridItem = styled.div`
  width: 50%;
  padding: 0 24px 36px;
  @media ${device.md} {
    flex: 1;
    width: auto;
    padding: 0 24px 0 0;
  }
`
const JoinItem = styled(GridItem)`
  width: 100%;
  @media ${device.sm} {
    width: 50%;
  }
  @media ${device.md} {
    flex: 1.5;
  }
`
const GridTitle = styled.div`
  font-size: 16px;
  line-height: 26px;
  font-weight: 500;
  margin-bottom: 15px;
`
const JoinTitle = styled(GridTitle)`
  display: flex;
  align-items: center;
  font-size: 20px;
`
const Row = styled.div`
  color: rgba(189, 191, 198, .8);
  margin-top: 12px;
`
const JoinRow = styled(Row)`
  font-size: 14px;
  line-height: 1.4;
  margin: 0 0 16px;
`
const RowLink = styled.a`
  display: block;
  color: rgba(189, 191, 198, .8);
  margin-top: 12px;
`
const FootLogo = styled.img`
  width: 32px;
  margin: 0 16px 0 0;
`
const Footer = () => {

  return (
    <Wrap>
      <Section>
        <JoinItem>
          <JoinTitle><FootLogo src={logoUrl} />zk.Link</JoinTitle>
          <JoinRow>zkLink is a trustless chain-to-chain DEX based on zero-knowledge technology. As the bridging component among isolated chains and layer2 networks, zkLink makes it possible for native assets on separate ecos to interoperate and pair with each other.</JoinRow>
        </JoinItem>
        <GridItem>
          <GridTitle>Contact Us</GridTitle>
          <Row>zklinkteam@zklink.org</Row>
          <Community />
        </GridItem>
        <GridItem>
          <GridTitle>Products</GridTitle>
          <Row>Multi-chain Swap</Row>
          {/*<Row>zkLink Lend</Row>*/}
          <Row>API</Row>
        </GridItem>
        <GridItem>
          <GridTitle>Support</GridTitle>
          <RowLink href={"https://docs.zk.link"}>Documentation</RowLink>

          <Row>Forum</Row>
        </GridItem>
        <GridItem>
          <GridTitle>Protocol</GridTitle>
          <Row>Vote</Row>
        </GridItem>
      </Section>
    </Wrap>
  )
}

export default Footer