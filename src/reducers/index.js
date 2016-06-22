'use strict';
import {
	combineReducers
} from 'redux';
import read from './read';
import detail from './newsdetail';

const rootReducer = combineReducers({
	read,
	detail
});

export default rootReducer;