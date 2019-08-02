import React from 'react';
import Layout from './index';
import VideosListContainer from '../containers/VideosList';

const VideosListLayout = props => (
  <Layout>
    <VideosListContainer {...props} />
  </Layout>
);

export default VideosListLayout;
