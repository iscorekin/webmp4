import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import urls from './constants/urls';
import VideosList from './layouts/VideosList';

const Routes = (props) => (
  <Fragment>
    <Route path={urls.exact} isExact render={() => <VideosList app={props}/>}/>
    <Route path={urls.upload} render={() => <div />} />
  </Fragment>
);

export default Routes;