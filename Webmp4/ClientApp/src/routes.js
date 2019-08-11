import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import VideosList from './layouts/VideosList';

const Routes = (props) => (
  <Fragment>
    <Route path="/" isExact render={() => <VideosList app={props}/>}/>
  </Fragment>
);

export default Routes;