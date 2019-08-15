/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import * as UI from './styles';
import Switch from '../../ui/Switch';
import colors from '../../constants/colors';
import T from '../../ui/T';
import Form from './components/Form';

const customStyles = {
  overlay: {
    zIndex: 99,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

Modal.setAppElement('#root');

// eslint-disable-next-line react/prop-types
const LoginOrRegister = ({ context }) => {
  const { isOpen, close } = context;
  const [isReg, setReg] = useState(false);

  useEffect(() => {
    if (isOpen) document.getElementById('root').style.filter = 'blur(5px)';
    else document.getElementById('root').style.filter = 'none';
  }, [isOpen]);

  return (
    <UI.StyledModal
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      isOpen={isOpen}
      onRequestClose={close}
      styles={customStyles}
    >
      <Switch
        value={isReg}
        onChange={setReg}
        options={['log', 'reg']}
        colors={[colors.curiousBlue, colors.mantis]}
      />
      <T.h3 styles={UI.TStyles} isReg={isReg}>
        {isReg ? 'регистрация' : 'вход'}
      </T.h3>
      <Form {...context} isReg={isReg} />
    </UI.StyledModal>
  );
};

export default LoginOrRegister;
