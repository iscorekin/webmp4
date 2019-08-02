import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import VideosList from './layouts/VideosList';

const Routes = () => (
  <Fragment>
    <Route path="/" isExact component={VideosList} />
  </Fragment>
);

export default Routes;