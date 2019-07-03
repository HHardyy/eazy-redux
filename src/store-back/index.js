import { createStore,applyMiddleware,compose  } from 'redux'
import reducers from './reducers.js'
import thunk from 'redux-thunk';

const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

let store=createStore(reducers,enhancer)

export default store