import React from 'react';
import {
	combineReducers
} from "redux";
import * as appType from "../constants/AppType";
const initialState = {
	isSplashed: false,
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case appType.IS_SPLASHED:
			return {
				...state,
				isSplashed: true,
			};
		default:
			return state;
	}

};
export default reducer;