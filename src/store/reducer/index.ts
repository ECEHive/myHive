import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { History } from 'history';
import inventory from './inventory';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    inventory: inventory
  });
}
