import React from 'react';
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
  const { title, children, app } = props;

  document.title = `${title} | webmp4`;
  
  return (
    <Wrapper>
      <AppHeader app={app}/>
      <Resizer>
        {children}
      </Resizer>
    </Wrapper>
  )
};

Layout.propTypes = {
  app: propTypes.object,
  title: propTypes.string,
  children: propTypes.element,
};

export default Layout;