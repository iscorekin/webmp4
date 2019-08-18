import styled, { css } from 'styled-components';
import colors from '../../constants/colors';
import T from '../../ui/T';

export const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  background-color: ${colors.curiousBlue};
  box-shadow: 0px 16px 24px -24px #000000;

  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  user-select: none;
`;

export const LogoImg = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 4px;
`;

export const LogoText = styled(T.h3)`
  color: ${colors.aquaHaze};
`;

export const Right = styled.div``;

export const LoginButton = css`
  color: ${colors.aquaHaze};
  border-color: ${colors.aquaHaze};
  width: 64px;
  height: 32px;
  font-size: 14px;
  padding: 0 40px;

  &:hover {
    box-shadow: 0px 0px 10px 0px ${colors.geyser};
  }
`;
