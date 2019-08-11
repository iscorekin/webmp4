import React from 'react';
import Routes from './routes';
import AppContainer from './containers/App';

const App = (props) => 
  <AppContainer>
    <Routes {...props} />
  </AppContainer>;

export default App;