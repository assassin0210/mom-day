import {memo} from "react";
import {Flower} from "../static/svg/Flower";
import styled from "styled-components";


export const Logo = memo(() => {
  
  return (
    <Wrapper>
      <Flower/>
      <LogoText>Flowers4U</LogoText>
    </Wrapper>
  )
})

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const LogoText = styled.span`
  font-family: 'Montserrat',sans-serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 33px;
  color:#E24666;
`
