import styled from 'styled-components';
import colors from '../../constants/colors';

export const Container = styled.div`
  ${({ styles }) => styles}
`;

export const TextInputWrapper = styled.div`
  min-height: 36px;
  transition: all 0.2s ease-in-out;
  border: 1px solid
    ${({ isValid, borderColor }) =>
    isValid ? borderColor || colors.curiousBlue : colors.burntSienna};
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${({ lines }) => (lines ? '12px' : 0)} 20px;
`;

export const TextInput = styled.input`
  width: 100%;
  font-size: 14px;
  outline: none;
  border: none;
`;

export const TextArea = styled.textarea`
  width: 100%;
  font-size: 14px;
  outline: none;
  border: none;
  resize: none;

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }
  ::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #000000;
  }
`;

export const Label = styled.div`
  position: absolute;
  background-color: white;
  margin-top: -9px;
  margin-left: 21px;

  user-select: none;
`;
