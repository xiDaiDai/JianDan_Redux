'use strict';
import {
	combineReducers
} from 'redux';
import read from './read';
import detail from './newsdetail';
import joke from './joke';
import pics from './pics';
import girls from './girls';
import videos from './videos';
const rootReducer = combineReducers({
	read,
	detail,
	joke,
	pics,
	girls,
	videos
});

export default rootReducer;