import styled from 'styled-components';
import colors from '../../constants/colors';
import { Wrapper as TagPlateWrapper } from '../TagPlate/styles';

export const Container = styled.div`
  ${({ styles }) => styles}
`;

export const Wrapper = styled.div`
  min-height: 36px;
  transition: all 0.2s ease-in-out;
  border: 1px solid ${colors.curiousBlue};
  border-radius: 8px;

  display: flex;
  align-items: center;
  padding: 6px 20px;
  flex-wrap: wrap;

  ${TagPlateWrapper} {
    margin: 4px;
  }
`;

export const Label = styled.div`
  position: absolute;
  background-color: white;
  margin-top: -9px;
  margin-left: 21px;

  user-select: none;
`;

export const TagInput = styled.input`
  border: none;
  outline: none;

  min-width: 100px;

`;