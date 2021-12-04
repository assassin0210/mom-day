import React, {FC, useRef, useState} from 'react';
import styled from 'styled-components';
import {Logo, LogoText} from "./ui/Logo";
import Card from '../src/static/cart.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowRight, faCaretUp, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import Flower1 from '../src/static/flower1.jpg'
import Car from '../src/static/svg/car.svg'
import Phone from '../src/static/svg/phone.svg'
import Human from '../src/static/svg/human.svg'
import Family from '../src/static/famaly.png'
import Arrow1 from '../src/static/svg/handleArrow1.svg'
import One from '../src/static/1.png'
import Two from '../src/static/2.png'
import Three from '../src/static/3.png'
import {Button} from './ui/Buttons';
import {Modal} from "./ui/Modal";
import {Form} from './ui/Form';
import {FooterFlower} from "./static/svg/FooterFlower";
import {Vk} from "./static/svg/Vk";
import {Inst} from './static/svg/Inst';
import {Fb} from './static/svg/Fb';


function App() {
  
  const [caret, setCaret] = useState(false)
  const [modal, setModal] = useState(false)
  const [modalOrder, setModalOrder] = useState(false)
  const [modalTitle, setModalTitle] = useState("")
  const delivery = useRef(null)
  const catalog = useRef(null)
  const stock = useRef(null)
  
  const handleModalTitle = (text: string) => {
    setModal(!modal)
    setModalTitle(text)
  }
  
  const handleModalOrder = () => {
    setModalOrder(!modalOrder)
  }
  const handleScroll = (ref: any) => {
    ref.current.scrollIntoView({behavior: "smooth"})
  }
  
  
  return (
    <div>
      {modal && <Modal text={modalTitle} setValue={setModal}/>}
      {modalOrder && <Modal order setValue={setModalOrder}/>}
      <Header>
        <Logo/>
        <RightContentWrapper>
          <nav>
            <NavList>
              <NavItem onClick={() => handleScroll(delivery)}>Доставка</NavItem>
              <NavItem onClick={() => handleScroll(catalog)}>Каталог</NavItem>
              <NavItem onClick={() => handleScroll(stock)}>Акция</NavItem>
            </NavList>
          </nav>
          <CartWrapper onClick={() => {
            handleModalTitle("Карзина")
            setCaret(!caret)
          }
          }>
            <img src={Card} alt="trash"/>
            <span>1700 р. <Caret $caret={caret}
                                 icon={faCaretUp}/>
            </span>
          </CartWrapper>
          <Menu onClick={() => handleModalTitle("Меню")
          }>
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
            <Button onClick={handleModalOrder}>Заказать букет</Button>
            <Button secondary onClick={() => handleModalTitle("Смотреть каталог")}>Смотреть каталог</Button>
          </ButtonWrapper>
        </LeftContent>
        <ImgWrapper>
          <img src={Flower1} alt="main-flower"/>
          <ImgBorder/>
        </ImgWrapper>
      </MainSection>
      <DeliverSection ref={delivery}>
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
      <AssortmentSection ref={catalog}>
        <TitleSection>Ассортимент</TitleSection>
        <span>слайдер</span>
        <SeeMore onClick={() => handleModalTitle("Увидеть больше")}>
          <WrapperText><span>Увидеть больше</span>
            <ArrowRight/></WrapperText>
        </SeeMore>
      </AssortmentSection>
      <WorkSection>
        <TitleSection>Как это работает?</TitleSection>
        <ItemsWrapper>
          <Item>
            <img src={Car} alt="car"/>
            <ItemText>Доставка по городу
              30-180 минут</ItemText>
          </Item>
          <Item>
            <img src={Phone} alt="phone"/>
            <ItemText>Можно заказать
              в онлайн приложении
              и оплатить картой</ItemText>
          </Item>
          <Item>
            <img src={Human} alt="human"/>
            <ItemText>Можно заказать цветы,
              оставив лишь
              номер адресата</ItemText>
          </Item>
        </ItemsWrapper>
        <SingleButtonWrapper>
          <Button secondary onClick={handleModalOrder}>Заказать букет</Button>
        </SingleButtonWrapper>
      </WorkSection>
      <ActionSection>
        <TitleSection>Благотворительная акция</TitleSection>
        <div>
          <Wrapper>
            <div><TextWithLine>Закажи доставку цветов на 28.11.21</TextWithLine></div>
            <img src={Arrow1} alt="arrow"/>
            <TextWrapper><span>Получи скидку 10%</span></TextWrapper>
          </Wrapper>
          <ContainerWithImg>
            <FamilyImg src={Family} alt="family"/>
            <ImageWrapper>
              <Promo/> <ArrowDown/>
              <TextWithArrow>ИЛИ</TextWithArrow>
              <BlueText>
                Вы можете перечислить эти 10% в благотворительный фонд, который помогает матерям одиночкам «Добро
                даром»
              </BlueText>
            </ImageWrapper>
          </ContainerWithImg>
        </div>
      </ActionSection>
      
      <TimeSection ref={stock}>
        <TitleSection>Обратный отсчёт до конца акции</TitleSection>
        <TimeWrapper>
          <TimeBlock>
            <RedBold>8</RedBold>
            <TimeDesc>Дней</TimeDesc>
          </TimeBlock>
          <RedBold>:</RedBold>
          <TimeBlock>
            <RedBold>5</RedBold>
            <TimeDesc>Часов</TimeDesc>
          </TimeBlock>
          <RedBold>:</RedBold>
          <TimeBlock>
            <RedBold>36</RedBold>
            <TimeDesc>Минут</TimeDesc>
          </TimeBlock>
        </TimeWrapper>
      </TimeSection>
      <GiveSection>
        <BlueTitle>#ДОБРОДАРОМ</BlueTitle>
        <ImageContainer>
          <Image src={One} alt=""/>
          <Image src={Two} alt=""/>
          <Image src={Three} alt=""/>
        </ImageContainer>
      </GiveSection>
      <DeliveryNowSection>
        
        <FormWrapper>
          <Form/>
        </FormWrapper>
      </DeliveryNowSection>
      <Footer>
        <FooterContent1>
          <LogoWrapper><FooterFlower/> <WhiteLogo>Flowers4U</WhiteLogo></LogoWrapper>
          
          <RightContentWrapper>
            <nav>
              <NavList>
                <NavItem onClick={() => handleScroll(delivery)}>Доставка</NavItem>
                <NavItem onClick={() => handleScroll(catalog)}>Каталог</NavItem>
                <NavItem onClick={() => handleScroll(stock)}>Акция</NavItem>
              </NavList>
            </nav>
          </RightContentWrapper>
          <Social>
            <Vk/>
            <Inst/>
            <Fb/>
          </Social>
        </FooterContent1>
      </Footer>
    </div>
  );
}

export default App;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`

const Social = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`

const WhiteLogo = styled(LogoText)`
  color: white;
`

const FooterContent1 = styled.div`
  padding: 100px 0;
  width: 1200px;
  display: flex;
  justify-content: space-between;

  li {
    color: white;
  }
`

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #E24666;
`

const FormWrapper = styled.div`
  margin: 141px 0;
  border-radius: 20px;
  padding: 10px;
  padding-left: 100px;
  border: 1px solid #E24666;`

const DeliveryNowSection = styled.div`
  max-width: 1170px;
  margin: 0 auto;
`

const Image = styled.img`
  cursor: pointer;
  transition: transform 0.3s;
  width: 100%;
  min-width: 80px;

  &:hover {
    transform: scale(1.1);

  }
`

const ImageContainer = styled.div`
  margin-top: 68px;
  gap: 25px;
  display: flex;
  align-items: start;
  justify-content: space-between;

  img:nth-child(2n) {
    margin-top: 100px;
  }
`

const BlueTitle = styled.p`
  font-family: Yeseva One, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  text-transform: capitalize;
  color: #4F86F7;
`

const GiveSection = styled.div`
  max-width: 1200px;
  margin: 167px auto 0;
  text-align: center;

`

const TimeBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #DC0988;
  border-radius: 20px;
  padding-bottom: 15px;
  width: 236px;
`
const TimeDesc = styled.span`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 59px;
  text-transform: capitalize;
  color: #E24666
`

const TimeWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 109px;
`

const RedBold = styled.span`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 144px;
  text-transform: capitalize;
  color: #E24666;
`

const TimeSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 147px;
`

const BlueText = styled.p`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #4F86F7;
  max-width: 497px;
  margin-left: auto;
  margin-right: 50px;
`
const TextWithArrow = styled.span`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 33.931px;
  line-height: 41px;

  color: #323232;
`

const FamilyImg = styled.img`
  height: 100%;
`


const ContainerWithImg = styled.div`
  display: flex;`


const TextWrapper = styled.div`
  display: flex;
  align-items: end;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #323232;
`
const Wrapper = styled.div`
  margin-top: 106px;
  margin-bottom: 19px;
  display: flex;

  img {
    margin: 0 52px 15px 95px;
  }
`
const TextWithLine = styled.span`
  display: inline-flex;
  border-bottom: 1px red solid;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #323232;
`
const SingleButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 87px;
`
const ItemsWrapper = styled.div`
  margin-top: 113px;
  display: flex;
  justify-content: space-between;
`
const ItemText = styled.p`
  margin-top: 31px;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #323232;
`
const Item = styled.div`
  width: 297px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

const WorkSection = styled.div`
  max-width: 1200px;
  margin: 110px auto 0;
`
const ActionSection = styled(WorkSection)``

const WrapperText = styled.div`
  display: flex;
  align-items: center;
`

const ArrowRight = styled(FontAwesomeIcon).attrs({icon: faArrowRight})`
  margin-left: 13px;
  font-size: 20px;
  transition: transform 0.3s;

`

const SeeMore = styled.div`
  display: flex;
  justify-content: end;
  position: relative;
  cursor: pointer;

  &:hover {
    ${ArrowRight} {
      transform: translateX(10px);
    }
  }

  &:after {
    position: absolute;
    content: '';
    height: 1px;
    width: 165px;
    background-color: black;
    top: 30px;
  }
`

const AssortmentSection = styled.div`
  max-width: 1200px;
  margin: 150px auto 0;
  text-align: center;
`

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
const ArrowDown = () => {
  return (
    <svg width="111" height="197" viewBox="0 0 111 197" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M48.6486 117.142C49.2357 111.49 51.0579 106.345 53.0781 101.263C55.7908 94.4395 58.7823 87.7174 61.252 80.8087C63.7046 73.9479 65.7234 66.9287 67.8154 59.9442C70.259 51.7841 70.2978 43.5944 68.2463 35.2993C67.3595 31.7131 67.683 27.802 66.6221 24.2902C64.8327 18.3665 62.0066 12.8464 58.3288 7.78739C57.3118 6.38793 56.7279 4.66229 56.0394 3.04613C55.8907 2.69593 56.1488 2.17266 56.2197 1.72898C56.6798 1.89583 57.345 1.92455 57.5667 2.25238C58.7873 4.05747 59.7647 6.03757 61.0746 7.76974C65.1816 13.2009 68.0299 19.2716 69.5655 25.8184C70.7289 30.7772 71.034 35.9377 71.7199 41.009C72.5708 47.2934 72.2437 53.5612 70.6071 59.6462C68.911 65.9535 66.9142 72.199 64.6775 78.337C62.1646 85.2316 59.1293 91.9356 56.5173 98.7965C53.8225 105.876 51.6732 113.071 50.4237 120.627C49.3334 127.222 48.2112 133.769 47.8622 140.448C47.5509 146.405 47.2018 152.342 48.6824 158.218C50.7243 166.32 52.7018 174.438 54.7094 182.55C54.8456 183.1 55.1978 183.68 55.1066 184.185C54.9209 185.216 54.5016 186.204 54.1787 187.21C53.7219 186.429 53.0731 185.701 52.8391 184.857C51.1265 178.695 49.6588 172.459 47.8025 166.341C45.1557 157.617 44.6645 148.751 45.5117 139.76C46.0386 134.172 46.6646 128.592 47.3523 123.021C47.5907 121.09 48.1494 119.2 48.6486 117.142Z"
        fill="#E24666"/>
      <path
        d="M54.3303 194.788C53.9063 194.93 53.3439 195.046 53.2626 194.897C50.2702 189.457 47.2822 184.013 44.3895 178.519C43.3526 176.549 42.4781 174.482 41.7013 172.395C41.4319 171.672 41.6812 170.756 41.694 169.928C42.4392 170.448 43.4792 170.805 43.8746 171.519C45.1702 173.854 46.1805 176.345 47.3949 178.728C49.0472 181.971 50.9691 185.09 52.4284 188.415C53.4789 190.809 54.4949 189.626 55.0928 188.514C56.0269 186.776 56.4459 184.771 57.2327 182.944C58.6236 179.712 60.0808 176.508 61.5973 173.334C62.6946 171.037 63.8631 168.767 65.1546 166.576C65.488 166.009 66.4046 165.784 67.0538 165.403C67.0485 166.046 67.2436 166.776 67.0061 167.318C64.7538 172.469 62.464 177.605 60.1112 182.711C58.267 186.712 56.3183 190.665 54.3303 194.788Z"
        fill="#E24666"/>
    </svg>
  
  )
}

const Promo: FC = () => {
  return (
    <CircleSVG width="297" height="109" viewBox="0 0 297 109" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd"
            d="M219.046 14.7108C233.257 16.313 244.281 20.6519 255.268 25.4004C291.3 40.99 302.023 61.1667 274.92 77.6521C232.781 103.207 138.952 114.051 68.2836 98.928C52.6322 95.5883 31.3614 91.981 16.4988 81.1379C2.67275 71.0554 4.20862 60.6648 11.7615 51.5895C19.4579 42.2804 33.4135 34.3227 44.4019 29.3866C92.4395 7.85898 186.157 -7.26247 267.958 12.3582C269.641 12.7458 271.382 12.4908 271.934 11.7966C272.486 11.1025 271.704 10.2361 270.142 9.85933C185.939 -10.335 89.2555 5.02658 39.8128 27.1812C26.1397 33.3387 8.01638 44.0349 2.0262 56.2347C-2.02667 64.5766 -0.498065 73.6075 11.4789 82.4088C27.2605 93.9545 49.8468 97.9467 66.4609 101.499C139.416 117.115 236.458 105.996 279.899 79.5958C309.074 61.8809 297.751 40.1928 259.001 23.4344C247.19 18.292 235.086 13.6795 219.66 11.9412C217.96 11.7501 216.447 12.2159 216.378 12.9892C216.188 13.7517 217.468 14.5305 219.046 14.7108Z"
            fill="#E24666"/>
      <g>
        <foreignObject width="250" height="80" x="25" y="32">
          <span>ПО ПРОМОКОДУ<br/> “МАМА”</span>
        </foreignObject>
      </g>
    </CircleSVG>
  
  )
}

const CircleSVG = styled.svg`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 22.7063px;
  line-height: 28px;
  text-align: center;
  text-transform: capitalize;

  color: #E24666;
`

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;

  svg {
    width: 100%;

  }

  & :first-child {
    margin-bottom: 40px;
  }

  //img {
  //  flex: 0;
  //
  //}
`;


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
      <SvgRelative width="194" height="104" viewBox="0 0 194 104" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <foreignObject width="150" height="30" x="25" y="33">
            <CityText>{children}</CityText>
          </foreignObject>
        </g>
        <g filter="url(#filter0_d_2_101)">
          <path fillRule="evenodd" clipRule="evenodd"
                d="M138.287 22.0517C146.024 23.3097 151.898 26.3816 157.736 29.7304C176.88 40.7241 181.942 54.5148 166.389 65.3452C142.211 82.1329 90.2567 88.3303 52.0786 77.2303C43.6226 74.7785 32.0926 72.0769 24.3764 64.5548C17.1981 57.5602 18.4659 50.5443 22.9833 44.4923C27.5889 38.2836 35.5756 33.0663 41.8098 29.8584C69.0617 15.8695 121.13 6.77448 165.235 21.0553C166.144 21.3382 167.109 21.1868 167.441 20.7235C167.773 20.2603 167.378 19.6642 166.537 19.3901C121.135 4.69168 67.4295 13.9131 39.3806 28.3093C31.6226 32.3114 21.236 39.332 17.4488 47.5184C14.8829 53.1167 15.3531 59.2494 21.5686 65.354C29.7607 73.3631 41.9971 76.3412 50.9729 78.9484C90.3864 90.4105 144.116 84.0659 169.043 66.7218C185.784 55.0843 180.454 40.263 159.865 28.4448C153.591 24.8193 147.135 21.5491 138.737 20.1842C137.812 20.034 136.962 20.3309 136.893 20.8536C136.757 21.3675 137.428 21.9104 138.287 22.0517Z"
                fill="#323232"/>
        </g>
        
        <defs>
          <filter id="filter0_d_2_101" x="0.984329" y="0.940918" width="192.991" height="102.792"
                  filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
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
      </SvgRelative>
    </SVGWrapper>
  )
  
}
const SvgRelative = styled.svg`
  position: relative;
  z-index: -1;
`

const SvgAbsolute = styled.svg`
  position: absolute;
  right: 18px;
  bottom: 73px`

const CityText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  cursor: pointer;
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
const NavItem = styled.li`
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 24.3px;
`;
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;