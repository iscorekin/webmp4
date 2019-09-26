import styled from 'styled-components';
import colors from '../../constants/colors';

export const Wrapper = styled.div`
  width: fit-content;
  padding: 4px;
  border: 1px solid ${colors.curiousBlue};
  border-radius: 999px;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

export const ClearIcon = styled.img`
  width: 16px;
  cursor: pointer;
`;
