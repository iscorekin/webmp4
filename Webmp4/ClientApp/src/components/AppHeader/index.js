import React from 'react';
import logo from '../../assets/icons/logo.svg'
import * as UI from './styles';
import Resizer from '../../layouts/Resizer';

const AppHeader = () => {

  return (
    <UI.Wrapper>
      <Resizer>
        <UI.Content>
          <UI.LogoWrapper>
            <UI.LogoImg src={logo} />
            <UI.LogoText>.webmp4</UI.LogoText>
          </UI.LogoWrapper>
        </UI.Content>
      </Resizer>
    </UI.Wrapper>
  )
}

export default AppHeader;