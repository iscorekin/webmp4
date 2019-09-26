import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const Content = styled.div`
  width: 720px;
  height: 480px;
  flex-shrink: 0;
`;

export const Player = styled.video``;

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`;

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const MarginStyles = css`
  margin-bottom: 24px;
`;