import React from 'react';
import propTypes from 'prop-types';
import * as UI from './styles';

const TextInput = props => {
  const { label, value, onChange, secret, styles, borderColor, lines, isValid = true } = props;

  const handleChange = e => {
    onChange(e.currentTarget.value);
  };

  return (
    <UI.Container styles={styles}>
      <UI.Label>{label}</UI.Label>
      <UI.TextInputWrapper isValid={isValid} borderColor={borderColor} lines={lines}>
        {!lines ? 
        <UI.TextInput
          value={value}
          onChange={handleChange}
          type={secret && 'password'}
        /> : 
        <UI.TextArea 
          rows={lines}
          value={value}
          onChange={handleChange}
        />}
      </UI.TextInputWrapper>
    </UI.Container>
  );
};

TextInput.propTypes = {
  label: propTypes.string,
  value: propTypes.string || propTypes.number,
  onChange: propTypes.func,
  secret: propTypes.bool,
  isValid: propTypes.bool,
  styles: propTypes.any,
  borderColor: propTypes.string,
  lines: propTypes.number,
};

export default TextInput;
