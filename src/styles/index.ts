import styled from "styled-components";
import {device} from "./media";

export const SectionTitle = styled.div`
  font-weight: 500;
  font-size: 36px;
  line-height: 56px;
  text-align: center;
  
  @media ${device.lg} {
    font-size: 53px;
    line-height: 74px;
  }
`