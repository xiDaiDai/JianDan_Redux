import * as types from "../constants/AppType";

const initialState = {
	isLoading: false,
	jokes: [],
	loadMoreJokes: [],
}

const jokeReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCHING_JOKE:
			return Object.assign({}, state, {
				isLoading: true,
			});

		case types.FETCHING_NEXT_PAGE_JOKE:
			return Object.assign({}, state, {

			});


		case types.ERROR_GETTING_JOKE:
			return Object.assign({}, state, {
				isLoading: false,
				jokes: []
			});

		case types.RECEIVED_DATA_JOKE:
			return Object.assign({}, state, {
				isLoading: false,
				jokes: action.data.comments
			});

		case types.RECEIVED_MORE_DATA_JOKE:
			return Object.assign({}, state, {
				isLoading: false,
				loadMoreJokes: action.data.comments,
				jokes: state.jokes.concat(action.data.comments),
			});

		default:
			return state;
	}
};
export default jokeReducer;