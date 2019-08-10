/* eslint-disable react/prop-types */
import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { JWT } from '../../constants/env';
import * as userModule from '../../store/modules/app/user';

const AppContainer = props => {
  const { children } = props;
  const { user, getUser, loginOrRegister } = props;

  useEffect(() => {
    if(!user.isLogged && JWT) {
      getUser();
    }
  }, []);

  const [login, setL] = useState(undefined);
  const [pass, setP] = useState(undefined);

  return (
    <Fragment>
      {children}
      <input onChange={val => setL(val.currentTarget.value)}/>
      <input onChange={val => setP(val.currentTarget.value)}/>
      <button onClick={() => loginOrRegister(login, pass)}>login</button>
      <button onClick={() => loginOrRegister(login, pass, false)}>reg</button>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  const { user } = state.app;

  return { user };
}

const actions = {
  getUser: userModule.getUser,
  loginOrRegister: userModule.loginOrRegister
};

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators(actions, dispatch)
)(AppContainer);