import React from 'react';
import propTypes from 'prop-types';
import Resizer from './Resizer';
import AppHeader from '../components/AppHeader';

const Layout = props => {
  const { title, children } = props;

  document.title = `${title} | webmp4`;
  
  return (
    <Resizer>
      <AppHeader />
      {children}
    </Resizer>
  )
};

Layout.propTypes = {
  title: propTypes.string,
  children: propTypes.element,
};

export default Layout;