/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userModule from '../../store/modules/app/user';
import LoginOrRegister from '../../components/LoginOrRegister';

const LoginOrRegisterContainer = props => {
  const { loginOrRegister } = props;
  const { user } = props;
  const { isOpen, close } = props;

  const context = {
    login: (log, pass) => loginOrRegister(log, pass),
    register: (log, pass) => loginOrRegister(log, pass, false),
    user,
    close,
    isOpen
  }

  return (
    <LoginOrRegister
      context={context}
    />
  )
}

const mapStateToProps = (state) => {
  const { user } = state.app;

  return { user };
}

const actions = {
  getUser: userModule.getUser,
  loginOrRegister: userModule.loginOrRegister, 
};

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators(actions, dispatch)
)(LoginOrRegisterContainer);