import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './modules';

export default initialState => {
  const middleware = [
    thunk,
    // logger
  ];

  const rootReducer = combineReducers({
    ...reducers,
  });

  if (initialState)
    return createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(...middleware)),
    );

  return createStore(
    rootReducer,
    process.env.NODE_ENV !== 'production'
      ? composeWithDevTools(applyMiddleware(...middleware))
      : applyMiddleware(...middleware),
  );
}
