import React from 'react';
import logo from '../../assets/icons/logo.svg'
import * as UI from './styles';

const AppHeader = () => {

  return (
    <UI.Wrapper>
      <UI.LogoWrapper>
        <UI.LogoImg src={logo} />
        <UI.LogoText>.webmp4</UI.LogoText>
      </UI.LogoWrapper>
    
    </UI.Wrapper>
  )
}

export default AppHeader;