import React from 'react';
import {
	combineReducers
} from "redux";
import splashReducer from './splash';
import drawerReducer from './drawer';

const reducer = combineReducers({
	splashReducer,
	drawerReducer
});
export default reducer;