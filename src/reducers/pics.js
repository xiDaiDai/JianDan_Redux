import * as types from "../constants/AppType";

const initialState = {
	isLoading: false,
	pics: [],
	loadMorePics: [],
}

const picsReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCHING_PIC:
			return Object.assign({}, state, {
				isLoading: true,
			});

		case types.FETCHING_NEXT_PAGE_PIC:
			return Object.assign({}, state, {

			});


		case types.ERROR_GETTING_PIC:
			return Object.assign({}, state, {
				isLoading: false,
				pics: []
			});

		case types.RECEIVED_DATA_PIC:
			return Object.assign({}, state, {
				isLoading: false,
				pics: action.data.comments
			});

		case types.RECEIVED_MORE_DATA_PIC:
			return Object.assign({}, state, {
				isLoading: false,
				loadMorepics: action.data.comments,
				pics: state.pics.concat(action.data.comments),
			});

		default:
			return state;
	}
};
export default picsReducer;