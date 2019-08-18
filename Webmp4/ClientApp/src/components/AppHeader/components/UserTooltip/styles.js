import styled, { css } from 'styled-components';
import colors from '../../../../constants/colors';

export const Container = styled.div``;

export const Icon = styled.img`
  cursor: pointer;
  user-select: none;
  width: 32px;
`;

export const Tooltip = styled.div`
  position: absolute;
  width: 184px;
  background-color: ${colors.white};
  box-shadow: 0px 0px 10px 0px ${colors.geyser};
  height: 124px;
  padding: 24px;
  margin-left: -184px;
  margin-top: 20px;
  border-radius: 8px;
  z-index: 20;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${colors.black};
  font-weight: 600;
`;

export const ButtonStyles = logout => css`
  padding: 0;
  height: 36px;

  ${logout &&
    css`
      color: ${colors.burntSienna};
      border-color: ${colors.burntSienna};
    `}
`;

export const Hello = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
