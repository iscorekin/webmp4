import styled, { css } from 'styled-components';
import colors from '../../constants/colors';

export default { 
  default: styled.button`
    width: 100%;
    outline: none;
    border: 1px solid ${colors.curiousBlue};
    color: ${colors.curiousBlue};
    border-radius: 8px;
    padding: 18px 40px;
    background-color: transparent;
    transition: all .2s ease-in-out;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 16px;
    text-transform: uppercase;

    cursor: pointer;

    ${({ styles }) => styles}

    ${({ disabled }) => disabled && css`
      color: ${colors.geyser};
      border-color: ${colors.geyser};
      cursor: unset;
    `}
  `,
  link: styled.a`
    text-decoration: none;

    width: 100%;
    outline: none;
    border: 1px solid ${colors.curiousBlue};
    color: ${colors.curiousBlue};
    border-radius: 8px;
    padding: 18px 40px;
    background-color: transparent;
    transition: all .2s ease-in-out;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 16px;
    text-transform: uppercase;

    cursor: pointer;

    ${({ styles }) => styles}

    ${({ disabled }) => disabled && css`
      color: ${colors.geyser};
      border-color: ${colors.geyser};
      cursor: unset;
    `}
  `,
};