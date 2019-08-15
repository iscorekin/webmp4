import styled from 'styled-components';
import colors from '../../constants/colors';

export const Container = styled.div`
  ${({ styles }) => styles}
`;

export const TextInputWrapper = styled.div`
  width: 100%;
  height: 36px;
  transition: all .2s ease-in-out;
  border: 1px solid
    ${({ isValid, borderColor }) =>
    isValid ? borderColor || colors.curiousBlue : colors.burntSienna};
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextInput = styled.input`
  padding: 0 20px;
  width: 100%;
  font-size: 14px;
  outline: none;
  border: none;
`;

export const Label = styled.div`
  position: absolute;
  background-color: white;
  margin-top: -9px;
  margin-left: 21px;
`;
