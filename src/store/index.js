import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {user} from './user/reducer';
import {projects} from './projects/reducer';

const store = createStore(
  combineReducers({
    user,
    projects,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;