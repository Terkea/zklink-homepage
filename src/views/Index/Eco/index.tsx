import React, { memo } from "react";
import styled from "styled-components";
import {SectionTitle} from "../../../styles";
import {device} from "../../../styles/media";

const Wrap = styled.div`
  position: relative;
`
const Section = styled.div`
  max-width: 1120px;
  margin: 0 auto 40px;
`

const Grid = styled.div`
  display: grid;
  margin: 40px 0 0;
  grid-template-columns: repeat(2, 1fr);
  @media ${device.md} {
    grid-template-columns: repeat(4, 1fr);
  }
`
const GridItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;

  img {
    max-width: 100%;
    transform: scale(0.85);
  }
  .icon-highlight {
    display: none;
  }

  &:hover {
    .icon-normal {
      display: none;
    }
    .icon-highlight {
      display: block;
    }
  }

  &.disabled {
    opacity: .3;

    &:hover {
      .icon-normal {
        display: block;
      }
      .icon-highlight {
        display: none;
      }
    }
  }
`


const Eco = memo(() => {

  return (
    <Wrap>
      <Section>
        <SectionTitle>zkLink Eco</SectionTitle>
        <Grid>
          <GridItem>
            <picture className="icon-normal">
              <source srcSet={`${require('./../../../assets/images/eco/eco-eth-1.png').default}, ${require('./../../../assets/images/eco/eco-eth-1@2x.png').default} 2x`} />
              <img />
            </picture>
            <picture className="icon-highlight">
              <source srcSet={`${require('./../../../assets/images/eco/eco-eth-2.png').default}, ${require('./../../../assets/images/eco/eco-eth-2@2x.png').default} 2x`} />
              <img />
            </picture>
          </GridItem>
          <GridItem>
            <picture className="icon-normal">
              <source srcSet={`${require('./../../../assets/images/eco/eco-bsc-1.png').default}, ${require('./../../../assets/images/eco/eco-bsc-1@2x.png').default} 2x`} />
              <img />
            </picture>
            <picture className="icon-highlight">
              <source srcSet={`${require('./../../../assets/images/eco/eco-bsc-2.png').default}, ${require('./../../../assets/images/eco/eco-bsc-2@2x.png').default} 2x`} />
              <img />
            </picture>
          </GridItem>
          <GridItem>
            <picture className="icon-normal">
              <source srcSet={`${require('./../../../assets/images/eco/eco-heco-1.png').default}, ${require('./../../../assets/images/eco/eco-heco-1@2x.png').default} 2x`} />
              <img />
            </picture>
            <picture className="icon-highlight">
              <source srcSet={`${require('./../../../assets/images/eco/eco-heco-2.png').default}, ${require('./../../../assets/images/eco/eco-heco-2@2x.png').default} 2x`} />
              <img />
            </picture>
          </GridItem>
          <GridItem>
            <picture className="icon-normal">
              <source srcSet={`${require('./../../../assets/images/eco/eco-polygon-1.png').default}, ${require('./../../../assets/images/eco/eco-polygon-1@2x.png').default} 2x`} />
              <img />
            </picture>
            <picture className="icon-highlight">
              <source srcSet={`${require('./../../../assets/images/eco/eco-polygon-2.png').default}, ${require('./../../../assets/images/eco/eco-polygon-2@2x.png').default} 2x`} />
              <img />
            </picture>
          </GridItem>
          <GridItem className="disabled">
            <picture className="icon-normal">
              <source srcSet={`${require('./../../../assets/images/eco/eco-solana-1.png').default}, ${require('./../../../assets/images/eco/eco-solana-1@2x.png').default} 2x`} />
              <img />
            </picture>
            <picture className="icon-highlight">
              <source srcSet={`${require('./../../../assets/images/eco/eco-solana-2.png').default}, ${require('./../../../assets/images/eco/eco-solana-2@2x.png').default} 2x`} />
              <img />
            </picture>
          </GridItem>
          <GridItem className="disabled">
            <picture className="icon-normal">
              <source srcSet={`${require('./../../../assets/images/eco/eco-okex-1.png').default}, ${require('./../../../assets/images/eco/eco-okex-1@2x.png').default} 2x`} />
              <img />
            </picture>
            <picture className="icon-highlight">
              <source srcSet={`${require('./../../../assets/images/eco/eco-okex-2.png').default}, ${require('./../../../assets/images/eco/eco-okex-2@2x.png').default} 2x`} />
              <img />
            </picture>
          </GridItem>
          <GridItem className="disabled">
            <picture className="icon-normal">
              <source srcSet={`${require('./../../../assets/images/eco/eco-near-1.png').default}, ${require('./../../../assets/images/eco/eco-near-1@2x.png').default} 2x`} />
              <img />
            </picture>
            <picture className="icon-highlight">
              <source srcSet={`${require('./../../../assets/images/eco/eco-near-2.png').default}, ${require('./../../../assets/images/eco/eco-near-2@2x.png').default} 2x`} />
              <img />
            </picture>
          </GridItem>
          <GridItem className="disabled">
            <picture className="icon-normal">
              <source srcSet={`${require('./../../../assets/images/eco/eco-fantom-1.png').default}, ${require('./../../../assets/images/eco/eco-fantom-1@2x.png').default} 2x`} />
              <img />
            </picture>
            <picture className="icon-highlight">
              <source srcSet={`${require('./../../../assets/images/eco/eco-fantom-2.png').default}, ${require('./../../../assets/images/eco/eco-fantom-2@2x.png').default} 2x`} />
              <img />
            </picture>
          </GridItem>
        </Grid>
      </Section>
    </Wrap>
  )
})

export default Eco