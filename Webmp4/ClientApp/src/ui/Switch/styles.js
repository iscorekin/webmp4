import styled, { css } from 'styled-components';
import colors from '../../constants/colors';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SwitchContainer = styled.div`
  width: 48px;
  height: 24px;
  margin-left: 8px;
  margin-right: 8px;
  padding: 2px;

  border: 1px solid ${colors.outerSpace};
  border-radius: 20px;

  cursor: pointer;
`;

export const Option = styled.div`
  user-select: none;
`;

export const SwitchBubble = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  transition: all .2s ease-in-out;
  
  ${({ isTrue, color }) => isTrue 
    ? css`
      background-color: ${(color && color[1]) || colors.mantis};
      transform: translateX(24px);
    `
    : css`
      background-color: ${(color && color[0]) || colors.geyser};
    `
}
`;