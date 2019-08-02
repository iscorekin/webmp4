import styled from 'styled-components';
import { bigger } from '../helpers/mixins';

export const Resizer = styled.div`
  width: 100%;
  min-width: 320px;
  padding-right: 24px;
  padding-left: 24px;

  ${bigger.tablet`
    padding-right: 32px;
    padding-left: 32px;
  `}

  ${bigger.desktop`
    max-width: 1256px;
    margin: 0 auto;
    padding: 0;
  `}
`;

export default Resizer;
