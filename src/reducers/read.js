import * as types from "../constants/AppType";

const initialState = {
	isLoading: false,
	hasNewsToDisplay: false,
	news: [],
	loadMoreNews: [],
}

const newsReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCHING_NEWS:
			return Object.assign({}, state, {
				isLoading: true,
			});

		case types.FETCHING_NEXT_PAGE_NEWS:
			return Object.assign({}, state, {

			});


		case types.ERROR_GETTING_NEWS:
			return Object.assign({}, state, {
				isLoading: false,
				news: []
			});

		case types.RECEIVED_DATA:
			return Object.assign({}, state, {
				isLoading: false,
				news: action.data.posts
			});

		case types.RECEIVED_MORE_DATA:
			return Object.assign({}, state, {
				isLoading: false,
				loadMoreNews: action.data.posts,
				news: state.news.concat(action.data.posts),
			});

		default:
			return state;
	}
};
export default newsReducer;