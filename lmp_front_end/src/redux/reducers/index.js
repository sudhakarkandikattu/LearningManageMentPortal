import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import questions from '../questions';

const createRootReducer = (history) =>
	combineReducers({
    router: connectRouter(history),
    questions,
	});

export default createRootReducer;
