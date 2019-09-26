import React from 'react';
import propTypes from 'prop-types';
import clear from '../../assets/icons/clear-24px.svg';
import * as UI from './styles';

const TagPlate = props => {
  const { children, onDelete } = props;
  
  return (
    <UI.Wrapper>
      {children}
      {onDelete && <UI.ClearIcon src={clear} onClick={onDelete} />}
    </UI.Wrapper>
  )
};

TagPlate.propTypes = {
  children: propTypes.node,
  tag: propTypes.string,
  onDelete: propTypes.func,
  index: propTypes.number,
};

export default TagPlate;