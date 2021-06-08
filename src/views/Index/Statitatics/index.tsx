import React from "react";
import styled from "styled-components";
import {device} from "../../../styles/media";


const Wrap = styled.div`
  max-width: 900px;
  padding: 74px 20px 0;
  margin: 0 auto;
  
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-row-gap: 24px;
  grid-column-gap: 20px;
  
  @media ${device.md} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    
  }
`

const StatItem = styled.div`
  padding: 24px 0;
  text-align: center;
  background: rgba(32, 34, 49, 1);
  border-radius: 6px;
  transition: background-color .5s ease;
  cursor: default;
  &:hover {
    background-color: rgba(40, 40, 41, 1);
  }
  
  b {
    font-size: 30px;
    display: block;
    font-weight: 500;
  }
  div {
    color: rgb(127, 127, 127);
    margin-top: 12px;
  }
  
`
const Statistics = () => {

  return (
    <Wrap>
      <StatItem>
        <b>$ 00.00</b>
        <div>ZKL Price</div>
      </StatItem>
      <StatItem>
        <b>$ 00.00</b>
        <div>Total Liquidity</div>
      </StatItem>
      <StatItem>
        <b>$ 00.00</b>
        <div>Total Volume</div>
      </StatItem>
      <StatItem>
        <b>0</b>
        <div>Total Pairs</div>
      </StatItem>
    </Wrap>
  )
}

export default Statistics