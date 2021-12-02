import React, {FC, useState} from 'react';
import {NavLink} from 'react-router-dom';
import styled, {css} from 'styled-components';
import {Logo} from "./ui/Logo";
import Card from '../src/static/cart.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCaretUp, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import Flower1 from '../src/static/flower1.jpg'
import {faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons/faMapMarkedAlt";

function App() {
  
  const [caret, setCaret] = useState(false)
  return (
    <div>
      <Header>
        <Logo/>
        <RightContentWrapper>
          <nav>
            <NavList>
              <NavLink to="#"><NavItem>Доставка</NavItem></NavLink>
              <NavLink to="#"><NavItem>Каталог</NavItem></NavLink>
              <NavLink to="#"><NavItem>Акция</NavItem></NavLink>
            </NavList>
          </nav>
          <CartWrapper>
            <img src={Card} alt="trash"/>
            <span onClick={() => setCaret(!caret)}>1700 р. <Caret $caret={caret}
                                                                  icon={faCaretUp}/>
            </span>
          </CartWrapper>
          <Menu>
            <Line/>
            <Line/>
            <Line/>
          </Menu>
        </RightContentWrapper>
      </Header>
      <MainSection>
        <LeftContent>
          <Data>28.11.21</Data>
          <h1>Спасибо, мам!</h1>
          <p>Доставка лучших букетов в честь дня мамы!
            Наша благотворительная акция - ещё один
            повод поздравить маму!</p>
          <ButtonWrapper>
            <Button>Заказать букет</Button>
            <Button secondary>Смотреть каталог</Button>
          </ButtonWrapper>
        </LeftContent>
        <ImgWrapper>
          <img src={Flower1} alt="main-flower"/>
          <ImgBorder/>
        </ImgWrapper>
      </MainSection>
      <DeliverSection>
        <TitleWrapper><Marker/> <TitleSection>Доставка</TitleSection></TitleWrapper>
        <TownWrapper>
          <Town>Тверь</Town>
          <Town>Вологда</Town>
          <Town>Иваново</Town>
        </TownWrapper>
        <TownWrapper2>
          <Town>Ярославль</Town>
          <Town>Кострома</Town>
        </TownWrapper2>
      </DeliverSection>
      <footer></footer>
    </div>
  );
}

export default App;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  margin-bottom: 132px;
  gap: 20px;

`
const Marker = styled(FontAwesomeIcon).attrs({icon: faMapMarkerAlt})`
  color: #E24666;
  font-size: 55px`

export const TitleSection = styled.h2`
  font-family: Yeseva One, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  text-transform: capitalize;
  color: #323232
`


const DeliverSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 137px;

`

const TownWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

const TownWrapper2 = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`

const Town: FC = ({children}) => {
  return (
    <SVGWrapper>
      <SvgAbsolute width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.46425 4.99675C8.07314 8.86516 11.9896 11.077 13.8717 11.6994C17.9777 4.69806 15.4655 1.48491 14.1216 0.595934C12.3413 -0.581819 6.70313 0.16123 7.46425 4.99675Z"
          fill="#E24666"/>
        <path
          d="M4.78904 16.1844C8.67256 16.688 11.8966 13.5517 13.0232 11.9206C7.45924 6.01126 3.66924 7.51838 2.43819 8.55798C0.807257 9.93528 -0.0653696 15.5548 4.78904 16.1844Z"
          fill="#E24666"/>
        <path
          d="M19.4279 3.89349C15.8491 5.48328 14.7268 9.83888 14.613 11.8179C22.4387 13.9711 24.8918 10.7126 25.4025 9.18437C26.0791 7.15973 23.9015 1.90626 19.4279 3.89349Z"
          fill="#E24666"/>
        <path
          d="M23.2731 14.6519C20.5942 11.7955 16.1119 12.1689 14.2056 12.7126C14.7474 20.811 18.6317 22.0553 20.2428 22.0347C22.3773 22.0074 26.6217 18.2224 23.2731 14.6519Z"
          fill="#E24666"/>
        <path
          d="M14.6234 22.1625C16.3207 18.6334 14.355 14.5878 13.16 13.0062C5.80279 16.4338 6.04398 20.5053 6.64458 22.0004C7.44027 23.9813 12.5018 26.5739 14.6234 22.1625Z"
          fill="#E24666"/>
        <circle cx="13.9455" cy="12.638" r="2.17899" fill="white"/>
      </SvgAbsolute>
      <svg width="194" height="104" viewBox="0 0 194 104" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <foreignObject width="250" height="111" x="-30" y="0">
            <CityText>{children}</CityText>
          </foreignObject>
        </g>
        <g filter="url(#filter0_d_2_101)">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M138.287 22.0517C146.024 23.3097 151.898 26.3816 157.736 29.7304C176.88 40.7241 181.942 54.5148 166.389 65.3452C142.211 82.1329 90.2567 88.3303 52.0786 77.2303C43.6226 74.7785 32.0926 72.0769 24.3764 64.5548C17.1981 57.5602 18.4659 50.5443 22.9833 44.4923C27.5889 38.2836 35.5756 33.0663 41.8098 29.8584C69.0617 15.8695 121.13 6.77448 165.235 21.0553C166.144 21.3382 167.109 21.1868 167.441 20.7235C167.773 20.2603 167.378 19.6642 166.537 19.3901C121.135 4.69168 67.4295 13.9131 39.3806 28.3093C31.6226 32.3114 21.236 39.332 17.4488 47.5184C14.8829 53.1167 15.3531 59.2494 21.5686 65.354C29.7607 73.3631 41.9971 76.3412 50.9729 78.9484C90.3864 90.4105 144.116 84.0659 169.043 66.7218C185.784 55.0843 180.454 40.263 159.865 28.4448C153.591 24.8193 147.135 21.5491 138.737 20.1842C137.812 20.034 136.962 20.3309 136.893 20.8536C136.757 21.3675 137.428 21.9104 138.287 22.0517Z"
                fill="#323232"/>
        </g>
        
        <defs>
          <filter id="filter0_d_2_101" x="0.984329" y="0.940918" width="192.991" height="102.792"
                  filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                           result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="7.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.309804 0 0 0 0 0.52549 0 0 0 0 0.968627 0 0 0 0.7 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_101"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_101" result="shape"/>
          </filter>
        </defs>
      </svg>
    
    
    </SVGWrapper>
  )
  
}

const SvgAbsolute = styled.svg`
  position: absolute;
  right: 18px;
  bottom: 73px`

const CityText = styled.span`
  position: absolute;
  bottom: 44px;
  left: 26%;
  right: 55%;
  font-family: Montserrat, sans-serif !important;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-transform: capitalize;
  color: #323232 !important;

`
const SVGWrapper = styled.div`
  display: inline;
  position: relative;
`

const ButtonWrapper = styled.div`
  display: flex;
  gap: 73px;
  margin-top: 83px;
`

const ImgWrapper = styled.div`
  position: relative;
`

const ImgBorder = styled.div`
  right: 28px;
  top: 28px;
  position: absolute;
  border: 1px solid #E24666;
  border-radius: 20px;
  width: 359px;
  height: 565px;
  z-index: -1;`

const LeftContent = styled.div`
  margin-right: 40px;
  max-width: 630px;
`

const Data = styled.span`

  display: block;
  text-align: right;
  font-family: Marck Script, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 45px;
  color: #4F86F7;`
const MainSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 54px;


  h1 {
    font-family: Yeseva One, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 85px;
    line-height: 98px;
    color: #323232;
  }

  p {
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;
    color: #323232;
  }
`

const Button = styled.button<{ secondary?: boolean }>(({secondary}) => css`
  cursor: pointer;
  border: 0;
  width: 227px;
  height: 55px;
  background: #E24666;
  color: white;
  border-radius: 100px;
  font-family: Raleway, sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 23px;
  transition: background-color 0.3s;

  &:hover {
    background: #FF8FA6;
  }

  &:active {
    background: #B83B54;
  }

  ${secondary && css`
    border: 1px solid #E24666;
    background: white;
    color: #E24666;

    &:hover {
      background: #FFD9D9;
    }

    &:active {
      background: #FFAFAF;
    }
  `}
`)


const Caret = styled(FontAwesomeIcon)<{ $caret: boolean }>`
  color: ${({$caret}) => $caret ? "#DC0988" : "#000000"};
  transform: ${({$caret}) => `rotate(${$caret ? "0deg" : "-180deg"})`};
  transition: all 0.3s;


`

const RightContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
`

const CartWrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    cursor: pointer;
  }


`

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 17px;
  cursor: pointer;
`
const Line = styled.div`
  width: 35px;
  height: 3px;
  background: #4F86F7;
  border-radius: 10px;
`

const NavList = styled.ul`
  display: flex;
  gap: 82px;
`

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`

const NavItem = styled.li`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 24.3px;

`
