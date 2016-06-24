import * as type from '../constants/AppType';
import VideosService from '../utils/videosService'

export const fetchVideos = (): Object => {
	return {
		type: type.FETCHING_VIDEO
	}
}

export const fetchNextPageVideos = (): Object => {
	return {
		type: type.FETCHING_NEXT_PAGE_VIDEO
	}
}

export const getVideos = (): Function => {
	return (dispatch) => {
		dispatch(fetchVideos());
		VideosService.fetchVideos(dispatch);
	};
};


export const getNextPageVideos = (): Function => {
	return (dispatch) => {
		dispatch(fetchNextPageVideos());
		VideosService.fetchNextPageVideos(dispatch);
	};
};

export const errorOnReceivingVideos = (): Object => {
	return {
		type: type.ERROR_GETTING_VIDEO,
	};
};

export const retrievedVideos = (data: Object): Object => {
	return {
		type: type.RECEIVED_DATA_VIDEO,
		data
	};
};

export const retrievedMoreVideos = (data: Object): Object => {
	return {
		type: type.RECEIVED_MORE_DATA_VIDEO,
		data
	};
};