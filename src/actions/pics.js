import * as type from '../constants/AppType';
import Picservice from '../utils/picsService'

export const fetchPics = (): Object => {
	return {
		type: type.FETCHING_PIC
	}
}

export const fetchNextPagePics = (): Object => {
	return {
		type: type.FETCHING_NEXT_PAGE_PIC
	}
}

export const getPics = (): Function => {
	return (dispatch) => {
		dispatch(fetchPics());
		Picservice.fetchPics(dispatch);
	};
};


export const getNextPagePics = (): Function => {
	return (dispatch) => {
		dispatch(fetchNextPagePics());
		Picservice.fetchNextPagePics(dispatch);
	};
};

export const errorOnReceivingPics = (): Object => {
	return {
		type: type.ERROR_GETTING_PIC,
	};
};

export const retrievedPics = (data: Object): Object => {
	return {
		type: type.RECEIVED_DATA_PIC,
		data
	};
};

export const retrievedMorePics = (data: Object): Object => {
	return {
		type: type.RECEIVED_MORE_DATA_PIC,
		data
	};
};