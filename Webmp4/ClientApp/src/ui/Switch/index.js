import React from 'react';
import propTypes from 'prop-types';
import * as UI from './styles';

const Switch = props => {
  const { value, options, colors } = props;
  const { onChange } = props;

  return (
    <UI.Wrapper>
      <UI.Option>{options[0]}</UI.Option>
      <UI.SwitchContainer
        onClick={() => onChange(!value)}
      >
        <UI.SwitchBubble color={colors} isTrue={value} />
      </UI.SwitchContainer>
      <UI.Option>{options[1]}</UI.Option>
    </UI.Wrapper>
  );
};

Switch.propTypes = {
  value: propTypes.bool,
  options: propTypes.array,
  onChange: propTypes.func,
  colors: propTypes.array
};

export default Switch;
