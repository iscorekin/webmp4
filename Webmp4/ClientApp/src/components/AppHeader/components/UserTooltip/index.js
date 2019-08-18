/* eslint-disable react/prop-types */
import React from 'react';
import * as UI from './styles';
import icon from '../../../../assets/icons/user.svg';
import useComponentVisible from '../../../../hooks/useComponentVisible';
import Button from '../../../../ui/Button';
import urls from '../../../../constants/urls';

const UserTooltip = ({ user, logout }) => {
  const { isComponentVisible, setComponentVisible, ref } = useComponentVisible(
    false,
  );
  return (
    <UI.Container ref={ref} onClick={() => setComponentVisible(true)}>
      <UI.Icon src={icon} />
      {isComponentVisible && (
        <UI.Tooltip>
          <UI.Hello>
            привет, <UI.Link>{user.name}</UI.Link>
          </UI.Hello>
          <Button.link styles={UI.ButtonStyles(false)} href={urls.upload}>загрузить</Button.link>
          <Button.default onClick={logout} styles={UI.ButtonStyles(true)}>
            выйти
          </Button.default>
        </UI.Tooltip>
      )}
    </UI.Container>
  );
};

export default UserTooltip;
