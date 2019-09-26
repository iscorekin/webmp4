import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import urls from './constants/urls';
import VideosList from './layouts/VideosList';
import Upload from './layouts/Upload';

const Routes = (props) => (
  <Fragment>
    <Route path={urls.exact} exact render={() => <VideosList app={props}/>}/>
    <Route path={urls.upload} render={() => <Upload app={props} />} />
  </Fragment>
);

export default Routes;