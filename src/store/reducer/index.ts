import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { History } from 'history';
import inventory from './inventory';
import workbench from './workbench';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    inventory: inventory,
    workbench: workbench
  });
}
