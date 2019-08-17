/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import * as UI from './styles';
import TextInput from '../../../../ui/TextInput';
import { CAPTCHA_KEY } from '../../../../constants/env';
import colors from '../../../../constants/colors';
import Button from '../../../../ui/Button';

const Form = props => {
  const { isReg, login, register } = props;
  
  const [username, setUsername] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [newPassword, setNewPassword] = useState(undefined);
  const [formValid, setFormValid] = useState(false);

  const handleOnClick = () =>
    isReg ? register(username, password) : login(username, password);

  return (
    <UI.Wrapper>
      <TextInput
        styles={UI.InputStyles}
        borderColor={isReg && colors.mantis}
        label="логин"
        value={username}
        onChange={val => setUsername(val)}
      />
      <TextInput
        secret
        borderColor={isReg && colors.mantis}
        styles={UI.InputStyles}
        label="пароль"
        value={password}
        onChange={val => setPassword(val)}
      />
      {isReg && (
        <TextInput
          secret
          styles={UI.InputStyles}
          borderColor={isReg && colors.mantis}
          label="пароль еще раз"
          value={newPassword}
          onChange={val => setNewPassword(val)}
          isValid={newPassword === password}
        />
      )}
      <UI.CaptchaWrapper>
        <ReCAPTCHA
          sitekey={CAPTCHA_KEY}
          onChange={val => setFormValid(!!val)}
        />
      </UI.CaptchaWrapper>
      <Button.default
        disabled={!formValid}
        styles={UI.ButtonStyles(isReg)}
        onClick={() => formValid && handleOnClick()}
      >
        {isReg ? 'зарегистрироваться' : 'войти'}
      </Button.default>
    </UI.Wrapper>
  );
};

export default Form;
