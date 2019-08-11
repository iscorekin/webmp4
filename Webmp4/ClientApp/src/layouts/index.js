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
  const { title, children, app } = props;

  document.title = `${title} | webmp4`;
  
  const childrenWithExtraProp = React.Children.map(children, child => {
    return React.cloneElement(child, {
      ...props
    });
  });

  return (
    <Wrapper>
      <AppHeader app={app}/>
      <Resizer>
        {childrenWithExtraProp}
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