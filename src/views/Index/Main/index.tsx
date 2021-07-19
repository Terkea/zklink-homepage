import React from "react";
import styled from "styled-components";
import {device} from "../../../styles/media";
import linkDiamondUrl from './../../../assets/images/link-diamond@2x.png'
import Coming from "../Coming";


const MainWrap = styled.div`
  max-width: 1140px;
  padding: 150px 20px 0;
  margin: 0 auto;
  position: relative;
  text-align: center;
  @media ${device.sm} {
    padding: 160px 20px 0;
  }
  @media ${device.md} {
    text-align: right;
  }
`

const H2 = styled.div`
  max-width: auto;
  font-size: 40px;
  font-weight: 700;
  text-shadow: 1px 1px 3px rgba(0,0,0,.4);
  @media ${device.md} {
    font-size: 54px;
    max-width: 544px;
  }
  @media ${device.xl} {
    font-size: 72px;
  }
`
const Text = styled.div`
  font-size: 18px;
  margin: 30px 0 0;
  color: #9B9C9D;
  font-weight: 400;
  text-shadow: 1px 1px 3px rgba(0,0,0,.4);
  @media ${device.md} {
    font-size: 18px;
  }
`

const ButtonGroup = styled.div`
  display: inline-block;
  width: 280px;
  margin-top: 20px;
  @media ${device.md} {
    display: block;
    margin-top: 70px;
  }
`

const BlockButton = styled.a`
  max-width: 420px;
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 4px;
  margin: 20px auto 0;
  line-height: 24px;
  cursor: pointer;
  user-select: none;
  
  @media ${device.md} {
  }
`
const MainText = styled.div`
  padding: 0 16px;
  text-align: center;

  @media ${device.md} {
    text-align: left;
    position: absolute;
    top: 200px;
    left: 0;
  }
`
const Enter = styled(BlockButton)`
  background-image: linear-gradient(to right, #03D498, #3C67E9), linear-gradient(to right, #09A077, #2041A4);
  box-shadow: 0 0 15px -3px rgba(0,0,0,1);
  //border-bottom: 3px double transparent;
  //background-clip: padding-box, border-box;
`
const More = styled(BlockButton)`
  background-color: rgb(46, 51, 72);
`
const MainImage = styled.div`
  img {
    width: 300px;
    @media ${device.sm} {
      width: 400px;
    }
    @media ${device.md} {
      width: 500px;
    }

    @media ${device.lg} {
      width: 600px;
    }
  }

`
const Main = () => {

  return (
    <MainWrap>
      {/* <Logo src={linkDiamondUrl} /> */}
      <MainImage>
        <img src={require('./../../../assets/images/main.png').default} />
      </MainImage>
      <MainText>
        <H2>Connect Chains Together</H2>
        <Text>A Multi-Chain Integration DEX Based on ZK-Rollup</Text>
        
        <ButtonGroup>
          <Enter href="https://test.zk.link" target="_blank">Enter App Testnet</Enter>
        </ButtonGroup>
      </MainText>

    </MainWrap>
  )
}

export default Main