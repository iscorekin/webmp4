/* eslint-disable react/prop-types */
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { JWT } from '../../constants/env';
import * as userModule from '../../store/modules/app/user';

const AppContainer = props => {
  const { children } = props;
  const { user, getUser } = props;
  
  useEffect(() => {
    if(!user.isLogged && JWT) {
      getUser();
    }
  });

  return (
    <Fragment>
      {children}
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  const { user } = state.app;

  return user;
}

const actions = {
  getUser: userModule.getUser,
};

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators(actions, dispatch)
)(AppContainer);