import React, {useState} from 'react';

import LogoImg from '../../assets/images/lfo-logo.svg';

import NavBar from '../NavBar';

import {
  Container,
  Content,
  Logo,
  DisplayMenu,
  ButtonClosed,
  MenuClosedIcon,
  ButtonOpen,
  MenuOpenIcon,
} from "./style";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Container>
      <Content>
        <Logo>
          <img src={LogoImg} alt="lfooficial"/>
        </Logo>

        <DisplayMenu>
          <ButtonClosed>
            <MenuClosedIcon
              menuActive={toggle}
              onClick={() => setToggle(!toggle)}
            />
          </ButtonClosed>

          <ButtonOpen>
            <MenuOpenIcon
              menuActive={toggle}
              onClick={() => setToggle(!toggle)}
            />
          </ButtonOpen>
        </DisplayMenu>
        <NavBar toggle={toggle}/>
      </Content>
    </Container>
  );
}

export default Header;
