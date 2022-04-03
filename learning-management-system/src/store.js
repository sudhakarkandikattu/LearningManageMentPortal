import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { BrowserHistory } from 'history';

const defaultState = {
  courses: [],
  questions: [],
};

const store = createStore(defaultState);

export const history = syncHistoryWithStore(BrowserHistory, store);

export default store;
