'use strict';
import {
	combineReducers
} from 'redux';
import read from './read';
import newsdetail from './newsdetail';
const rootReducer = combineReducers({
	read,
	newsdetail
});

export default rootReducer;