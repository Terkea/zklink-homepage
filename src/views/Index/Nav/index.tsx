import React, {useEffect, useState} from "react";
import styled, {keyframes} from "styled-components";
import {device} from "../../../styles/media";
import logoUrl from './../../../assets/images/logo.png'
import Coming from "../Coming";
const AppNav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  transition: background-color .5s ease;
  
  &.bg {
    backdrop-filter: blur(10px);
    background-color: rgba(6, 7, 10, .6);
  }
  &.open {
    background-color: rgb(12, 14, 32);
  }
  @media ${device.md} {
    &.open {
      background-color: transparent;
    }
  }
  //backdrop-filter: blur(10px);
`
const PlaceHolder = styled.div`
`
const Holder = styled.div`
  display: flex;
  max-width: 1140px;
  height: 64px;
  padding: 0 16px;
  margin: 0 auto;
  align-items: center;
  
  @media ${device.md} {
    height: 80px;
  }
`

const Logo = styled.div`
  img {
    width: 32px;
    height: 32px;
    vertical-align: top;
  }
  
  @media ${device.md} {
    img {
      width: 37px;
      height: 37px;
    }
  }
`
const Title = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  font-size: 20px;
  font-weight: 700;
  margin-left: 20px;
  text-shadow: 0 0 3px rgba(0,0,0,.7);
  cursor: default;
  
  @media ${device.md} {
    justify-content: start;
  }
`

const Menu = styled.div`
  display: none;
  align-items: center;

  @media ${device.md} {
    display: flex;
  }

`

const MenuItem = styled.a`
  padding: 0 20px;
  font-size: 14px;
  font-weight: 400;
  text-shadow: 0 0 3px rgba(0,0,0,.7);
`
const Enter = styled.div`
  margin-left: 20px;
  padding: 0.5rem 1.5rem;
  border: 3px double transparent;
  border-radius: 80px;
  background-image: linear-gradient(rgb(13, 14, 33), rgb(13, 14, 33)), radial-gradient(circle at left top, #03D498, #3C67E9);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  cursor: pointer;
  font-size: 14px;
`

const MenuButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  
  svg {
    width: 32px;
  }
  @media ${device.md} {
    display: none;
  }
`
const FadeIn = keyframes`
  0% {
    display: none;
    opacity: 0;
  }
  1% {
    display: block;
    opacity: 0;
  }
  100% {
    display: block;
    opacity: 1;
  }
`
const FadeOut = keyframes`
  0% {
    display: block;
    opacity: 1;
  }
  99% {
    display: block;
    opacity: 0;
  }
  100% {
    display: none;
    opacity: 0;
  }
`
const SlideMenu = styled.div`
  background: rgb(12, 14, 32);
  position: absolute;
  top: 64px;
  right: 0;
  left: 0;
  padding: 24px 0 40px;
  border-radius: 0 0 8px 8px;
  display: none;
  min-height: 200px;
  
  @media ${device.md} {
    top: 80px;
    display: none!important;
  }
  &.in {
    display: block;
    animation: ${FadeIn} .5s ease forwards;
  }
  &.out {
    display: block;
    animation: ${FadeOut} .5s ease forwards;
  }
`
const SlideMenuItem = styled.a`
  display: block;
  padding: 16px 24px;
  font-size: 18px;
  &:active {
    background: rgba(255,255,255,.1);
  }
`
const ComingSoon = styled.div`
  font-size: 12px;
  color: #999;
  padding: 2px 0 0;
`
const Mask = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  //background: rgba(255, 255, 255, .5);
  z-index: 50;
`

const links = [
  {
    text: 'Docs',
    href: 'https://docs.zk.link',
  },
  {
    text: 'Blog',
    href: 'https://zklinkdefi.medium.com',
  }
]
const Nav = () => {
  const [hasBg, setHasBg] = useState(false)
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [animeClass, setAnimeClass] = useState('')
  const listenScroll = () => {
    if (document.documentElement.scrollTop > 10) {
      setHasBg(true)
    }
    else {
      setHasBg(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', listenScroll, false)
    listenScroll()
    return () => window.removeEventListener('scroll', listenScroll)
  }, [])

  let classNames = hasBg ? 'bg' : ''
  if (isOpenMenu) {
    classNames += ' open'
  }
  const toggle = () => {
    setIsOpenMenu(!isOpenMenu)
    setAnimeClass(isOpenMenu ? 'out' : 'in')
    if (isOpenMenu) {
      setTimeout(() => {
        setAnimeClass('')
      }, 300)
    }
  }
  return (
    <>
      <AppNav className={classNames}>
        <Holder>
          <Logo>
            <img src={logoUrl} alt=""/>
          </Logo>
          <Title>zk.Link</Title>
          <Menu>
            {
              links.map((item) => (
                <MenuItem key={item.text} href={item.href}>{item.text}</MenuItem>
              ))
            }
            {/* <Coming offset={[0, -10]}>
              <MenuItem>Analytics</MenuItem>
            </Coming>
            <Coming offset={[0, -10]}>
              <MenuItem>Vote</MenuItem>
            </Coming> */}
            <Coming>
              <Enter>
                Enter App
              </Enter>
            </Coming>
          </Menu>
          <MenuButton onClick={toggle}>
            {
              isOpenMenu?
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                :
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            }

          </MenuButton>

        </Holder>
        <SlideMenu className={animeClass}>
          {
            links.map((item) => (
              <SlideMenuItem key={item.text} href={item.href}>{item.text}</SlideMenuItem>
            ))
          }
          {/* <SlideMenuItem>
            Analytics
            <ComingSoon>Coming soon</ComingSoon>
          </SlideMenuItem>
          <SlideMenuItem>
            Vote
            <ComingSoon>Coming soon</ComingSoon>
          </SlideMenuItem> */}
          <SlideMenuItem>
            Enter App
            <ComingSoon>Coming soon</ComingSoon>
          </SlideMenuItem>
        </SlideMenu>
      </AppNav>
      {
        isOpenMenu ? <Mask onClick={toggle} /> : null
      }
    </>
  )
}

export default Nav