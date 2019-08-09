import React, { Fragment } from 'react';
import propTypes from 'prop-types';

const Protected = (props) => {
  const { children, renderDenied = null } = props;
  const { roles = [] } = props;
  const { user } = props;

  const accessGranted = roles.length === 0 || roles.includes(user.role);
 
  return <Fragment>{accessGranted ? children : renderDenied}</Fragment>;
}

Protected.propTypes = {
  children: propTypes.node,
  renderDenied: propTypes.node,
  user: propTypes.object,
  roles: propTypes.arrayOf(propTypes.string)
}

export default Protected;