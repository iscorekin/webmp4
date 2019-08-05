import styled from 'styled-components';
import colors from '../../constants/colors';

export default {
  h1: styled.h1`
    color: ${colors.outerSpace};
    font-size: 72px;
    font-weight: bold;
    
    ${({ styles }) => styles}
  `,
  h2: styled.h2`
     color: ${colors.outerSpace};
     font-size: 48px;
     font-weight: bold;

     ${({ styles }) => styles}
  `,
  h3: styled.h3`
     color: ${colors.outerSpace};
     font-size: 32px; 
     font-weight: bold;

     ${({ styles }) => styles}
  `,
}