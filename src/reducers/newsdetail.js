import React from 'react';
import * as types from "../constants/AppType";

const initialState = {
	isLoading: false,
	content: null,
}

const detailReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCHING_DETAIL_NEWS:

			return {
				...state,
				isLoading: true,
			};
		case types.ERROR_DETAIL_NEWS:
			return {
				...state,
				isLoading: false,
			};
		case types.RECEIVED_DETAIL_NEWS:
			return {
				...state,
				isLoading: false,
				content: action.data.post.content
			};

		default:
			return state;
	}
};
export default detailReducer;