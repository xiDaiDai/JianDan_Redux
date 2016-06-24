'use strict';
import {
	combineReducers
} from 'redux';
import read from './read';
import detail from './newsdetail';
import joke from './joke';
import pics from './pics';
import girls from './girls';
const rootReducer = combineReducers({
	read,
	detail,
	joke,
	pics,
	girls
});

export default rootReducer;