/* eslint-disable react/prop-types */
import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { JWT } from '../../constants/env';
import * as userModule from '../../store/modules/app/user';
import LoginOrRegister from '../LoginOrRegister';

const AppContainer = props => {
  const { children } = props;
  const { user, getUser, logout  } = props;

  useEffect(() => {
    if (!user.isLogged && JWT) {
      getUser();
    }
  }, []);

  const [isShowLoginModal, setShowLoginModal] = useState(false);

  const childrenWithExtraProp = React.Children.map(children, child => {
    return React.cloneElement(child, {
      user,
      showLoginModal: () => setShowLoginModal(true),
      logout
    });
  });

  return (
    <Fragment>
      <LoginOrRegister
        close={() => setShowLoginModal(false)}
        isOpen={isShowLoginModal}
      />
      <button onClick={() => setShowLoginModal(true)}>kal</button>
      {childrenWithExtraProp}
    </Fragment>
  );
};

const mapStateToProps = state => {
  const { user } = state.app;
  return { user };
};

const actions = {
  getUser: userModule.getUser,
  logout: userModule.logout,
};

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators(actions, dispatch),
)(AppContainer);
