/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { css } from 'styled-components';
import Layout from './index';
import UploadContainer from '../containers/UploadContainer';
import T from '../ui/T';

const TStyles = css`
  margin: 24px 0;
`;

const VideosListLayout = props => (
  <Layout title='Главная' app={props.app}>
    <T.h3 styles={TStyles}>загрузка webm/mp4</T.h3>
    <UploadContainer app={props.app} />
  </Layout>
);

export default VideosListLayout;
