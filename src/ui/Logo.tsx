import {memo} from "react";
import {Flower} from "../static/svg/Flower";
import styled from "styled-components";


export const Logo = memo(() => {
  
  return (
    <Wrapper>
      <Flower/>
      <Text>Flowers4U</Text>
    </Wrapper>
  )
})

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const Text = styled.span`
  font-family: 'Montserrat',sans-serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 33px;
  color:#E24666;
`
