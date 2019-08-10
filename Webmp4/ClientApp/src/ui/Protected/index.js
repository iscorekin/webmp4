import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import store from '../../store/configureStore';

const Protected = (props) => {
  const { children, renderDenied = null } = props;
  const { roles } = props;
  const { user } = store.getState().app;

  const accessGranted = (!roles && user.isLogged) || roles.includes(user.role);
 
  return <Fragment>{accessGranted ? children : renderDenied}</Fragment>;
}

Protected.propTypes = {
  children: propTypes.node,
  renderDenied: propTypes.node,
  user: propTypes.object,
  roles: propTypes.arrayOf(propTypes.string)
}

export default Protected;