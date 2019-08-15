import styled, { css } from 'styled-components';
import colors from '../../../../constants/colors';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputStyles = () => css`
  width: 308px;
  margin-bottom: 24px;
  transition: color 0.2s ease-in-out;
`;

export const ButtonStyles = isReg => css`
  ${isReg &&
    css`
      color: ${colors.mantis};
      border-color: ${colors.mantis};
    `}

  width: 308px;
`;

export const CaptchaWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`;
