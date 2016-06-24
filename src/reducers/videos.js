import * as types from "../constants/AppType";

const initialState = {
	isLoading: false,
	videos: [],
	loadMoreVideos: [],
}

const VideosReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCHING_VIDEO:
			return Object.assign({}, state, {
				isLoading: true,
			});

		case types.FETCHING_NEXT_PAGE_VIDEO:
			return Object.assign({}, state, {

			});


		case types.ERROR_GETTING_VIDEO:
			return Object.assign({}, state, {
				isLoading: false,
				videos: []
			});

		case types.RECEIVED_DATA_G:
			return Object.assign({}, state, {
				isLoading: false,
				videos: action.data.comments
			});

		case types.RECEIVED_MORE_DATA_VIDEO:
			return Object.assign({}, state, {
				isLoading: false,
				loadMoreVideos: action.data.comments,
				videos: state.videos.concat(action.data.comments),
			});

		default:
			return state;
	}
};
export default VideosReducer;