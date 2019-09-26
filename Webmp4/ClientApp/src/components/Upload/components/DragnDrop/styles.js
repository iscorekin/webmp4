import styled from 'styled-components';
import colors from '../../../../constants/colors';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 2px dashed ${({ isDragging }) => isDragging ? colors.mantis : colors.curiousBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  margin-bottom: 8px;
`;

export const Text = styled.div`
  color: ${({ isDragging }) => isDragging ? colors.mantis : colors.curiousBlue};
  font-size: 24px;
  font-weight: 600;

  user-select: none;
`;

export const Error = styled.span`
  color: ${colors.burntSienna};
`;