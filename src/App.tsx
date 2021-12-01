import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {Logo} from "./ui/Logo";
import Card from '../src/static/cart.png'

function App() {
  return (
    <div>
      <Header>
        <Logo/>
        <nav>
          <NavList>
            <NavLink to="#"><NavItem>Доставка</NavItem></NavLink>
            <NavLink to="#"><NavItem>Каталог</NavItem></NavLink>
            <NavLink to="#"><NavItem>Акция</NavItem></NavLink>
          </NavList>
        </nav>
        <div><img src={Card} alt=""/> <span>1700 р.</span> </div>


      </Header>
      <footer></footer>
    </div>
  );
}

export default App;

const NavList = styled.ul`
display: flex;
`

const Header = styled.header`
  display: flex;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
`

const NavItem = styled.li`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 24.3px;
  
`
