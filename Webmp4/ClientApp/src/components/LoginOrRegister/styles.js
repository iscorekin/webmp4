import styled from 'styled-components';
import Modal from 'react-modal';
import { smaller } from '../../helpers/mixins';
import colors from '../../constants/colors';

export const StyledModal = styled(Modal)`
  z-index: 99;
  position: absolute;
  width: 512px;
  height: 512px;
  top: calc(50vh - (512px / 2));
  left: calc(50vw - (512px / 2));

  outline: none;
  border-radius: 4px;
  padding: 32px;
  box-shadow: 0px 0px 30px -20px ${colors.black};
  display: flex;
  flex-direction: column;

  ${smaller.laptop`
    width: 80vw;
    height: 80vh;
    top: calc(50vh - (80vh / 2));
    left: calc(50vw - (80vw / 2));
  `}
`;