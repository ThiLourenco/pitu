import React from 'react';
import { Logo, HeaderContainer } from './styles';

import Icon from '../../assets/logo.png'

function Header(props) {
  return (
    <>
      <HeaderContainer>
        <Logo src={Icon} alt='Pitu - Encurtador de Links e URLs' />
        <p>{props.children}</p>

      </HeaderContainer>
    </>
  )
}

export default Header;