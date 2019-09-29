import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createBrowserHistory} from 'history';
import createRootReducer from './reducer';
import {routerMiddleware} from 'connected-react-router';

const composeEnhancers = (process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const history = createBrowserHistory();
const rootReducer = createRootReducer(history);
const router = routerMiddleware(history);
const enhancer = applyMiddleware(thunk, router);

function configureStore(initialState?: any) {
  const store = createStore(rootReducer, initialState, composeEnhancers(enhancer));
  // @ts-ignore
  if (module.hot) {
    // @ts-ignore
    module.hot.accept('./reducer', () => {
      const nextRootReducer = require('./reducer/index');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}

export {configureStore, history};
