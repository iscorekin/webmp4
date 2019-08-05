import React, { Fragment } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import Resizer from './Resizer';
import AppHeader from '../components/AppHeader';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Layout = props => {
  const { title, children } = props;

  document.title = `${title} | webmp4`;
  
  return (
    <Wrapper>
      <AppHeader />
      <Resizer>
        {children}
      </Resizer>
    </Wrapper>
  )
};

Layout.propTypes = {
  title: propTypes.string,
  children: propTypes.element,
};

export default Layout;