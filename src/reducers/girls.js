import * as types from "../constants/AppType";

const initialState = {
	isLoading: false,
	girls: [],
	loadMoreGirls: [],
}

const girlsReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCHING_GIRL:
			return Object.assign({}, state, {
				isLoading: true,
			});

		case types.FETCHING_NEXT_PAGE_GIRL:
			return Object.assign({}, state, {

			});


		case types.ERROR_GETTING_GIRL:
			return Object.assign({}, state, {
				isLoading: false,
				girls: []
			});

		case types.RECEIVED_DATA_G:
			return Object.assign({}, state, {
				isLoading: false,
				girls: action.data.comments
			});

		case types.RECEIVED_MORE_DATA_GIRL:
			return Object.assign({}, state, {
				isLoading: false,
				loadMoreGirls: action.data.comments,
				girls: state.girls.concat(action.data.comments),
			});

		default:
			return state;
	}
};
export default girlsReducer;