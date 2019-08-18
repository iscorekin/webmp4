/* eslint-disable react/prop-types */
import React from 'react';
import logo from '../../assets/icons/logo.svg';
import * as UI from './styles';
import Resizer from '../../layouts/Resizer';
import Button from '../../ui/Button';
import UserTooltip from './components/UserTooltip';

const AppHeader = ({ app }) => {
  const { user, showLoginModal, logout } = app;
  const { isLogged } = user;
  
  return (
    <UI.Wrapper>
      <Resizer>
        <UI.Content>
          <UI.LogoWrapper>
            <UI.LogoImg src={logo} />
            <UI.LogoText>.webmp4</UI.LogoText>
          </UI.LogoWrapper>
          <UI.Right>
            {!isLogged ? (
              <Button.default styles={UI.LoginButton} onClick={showLoginModal}>
                вход
              </Button.default>
            ) : (
              <UserTooltip user={user} logout={logout} />
            )}
          </UI.Right>
        </UI.Content>
      </Resizer>
    </UI.Wrapper>
  );
};

export default AppHeader;
