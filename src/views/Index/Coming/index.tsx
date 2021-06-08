import React, {FC, useRef, useState} from "react"
import styled, {keyframes} from "styled-components";
import utils from "../../../utils";

const FadeIn = keyframes`
  0% {
    display: none;
    opacity: 0;
  }
  1% {
    display: flex;
    opacity: 0;
  }
  100% {
    display: flex;
    opacity: 1;
  }
`
const Wrap = styled.div`
  position: relative;
  
  .popup {
    display: none;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    background-image: linear-gradient(to right, rgba(9, 160, 119, .9), rgba(32, 65, 164, .9));
    width: 150px;
    height: 56px;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    &.in {
      display: flex;
      animation: ${FadeIn} .3s ease forwards;
    }
  }
`
let timer: any = null
const Coming: FC<{
  offset?: [x: number, y: number],
}> = ({children, offset}) => {
  const [animeClass, setAnimeClass] = useState('')
  let bottom = -66
  if (offset) {
    if (offset[1]) {
      bottom += offset[1]
    }
  }
  const hide = () => {
    setAnimeClass('')
  }
  return (
    <Wrap onClick={() => {
      clearTimeout(timer)
      if (animeClass) {
        hide()
        return
      }
      utils.clearComing()
      utils.coming.push(() => {
        hide()
      })
      setAnimeClass('in')
      timer = setTimeout(() => {
        hide()
      }, 2000)
    }}>
      {children}
      <div className={`popup ${animeClass}`} style={{
        bottom,
      }}>
        Coming soon
      </div>
    </Wrap>
  )
}

export default Coming