/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Layout from './index';
import VideosListContainer from '../containers/VideosList';

const VideosListLayout = props => (
  <Layout title='Главная' app={props.app}>
    <VideosListContainer />
  </Layout>
);

export default VideosListLayout;
