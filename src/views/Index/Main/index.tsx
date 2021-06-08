import React from "react";
import styled from "styled-components";
import {device} from "../../../styles/media";
import linkDiamondUrl from './../../../assets/images/link-diamond@2x.png'
import Coming from "../Coming";

const Logo = styled.img`
  width: 180px;
  margin-bottom: 0;
  
  @media ${device.sm} {
    margin-bottom: 0;
    width: 208px;
  }
`
const MainWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 940px;
  padding: 150px 20px 0;
  margin: 0 auto;
  @media ${device.sm} {
    padding: 230px 20px 0;
  }
`

const H2 = styled.div`
  text-align: center;
  font-size: 40px;
  margin: 20px 0 0;
  font-weight: 500;
  text-shadow: 1px 1px 3px rgba(0,0,0,.4);
  @media ${device.md} {
    font-size: 54px;
  }
  @media ${device.xl} {
    font-size: 72px;
  }
`
const Text = styled.div`
  font-size: 15px;
  margin: 30px 0 0;
  color: rgb(227, 227, 227);
  text-align: center;
  font-weight: 300;
  text-shadow: 1px 1px 3px rgba(0,0,0,.4);
  @media ${device.md} {
    font-size: 18px;
  }
`

const ButtonGroup = styled.div`
  width: 280px;
  margin-top: 32px;
  @media ${device.md} {
  }
`

const BlockButton = styled.div`
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
const Enter = styled(BlockButton)`
  background-image: linear-gradient(to right, #03D498, #3C67E9), linear-gradient(to right, #09A077, #2041A4);
  box-shadow: 0 0 15px -3px rgba(0,0,0,1);
  //border-bottom: 3px double transparent;
  //background-clip: padding-box, border-box;
`
const More = styled(BlockButton)`
  background-color: rgb(46, 51, 72);
`

const Main = () => {

  return (
    <MainWrap>
      <Logo src={linkDiamondUrl} />
      <H2>Connect Chains Together</H2>
      <Text>A Multi-Chain Integration DEX Based on ZK-Rollup</Text>

      <ButtonGroup>
        <Coming>
          <Enter>Enter App</Enter>
        </Coming>
      </ButtonGroup>
    </MainWrap>
  )
}

export default Main