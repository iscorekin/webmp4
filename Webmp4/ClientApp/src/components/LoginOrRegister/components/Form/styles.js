import styled, { css } from 'styled-components';

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
  transition: color .2s ease-in-out;
`;

export const CaptchaWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;