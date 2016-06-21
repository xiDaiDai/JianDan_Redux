import {
	createStore,
	applyMiddleware
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from '../reducers/index';
const loggerMiddleware = createLogger();


const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore);

export default function configureStore(initialState) {
	const store = createStoreWithMiddleware(reducer, initialState);

	return store;
}