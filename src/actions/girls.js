import * as type from '../constants/AppType';
import Girlservice from '../utils/girlsService'

export const fetchGirls = (): Object => {
	return {
		type: type.FETCHING_GIRL
	}
}

export const fetchNextPageGirls = (): Object => {
	return {
		type: type.FETCHING_NEXT_PAGE_GIRL
	}
}

export const getGirls = (): Function => {
	return (dispatch) => {
		dispatch(fetchGirls());
		Girlservice.fetchGirls(dispatch);
	};
};


export const getNextPageGirls = (): Function => {
	return (dispatch) => {
		dispatch(fetchNextPageGirls());
		Girlservice.fetchNextPageGirls(dispatch);
	};
};

export const errorOnReceivingGirls = (): Object => {
	return {
		type: type.ERROR_GETTING_GIRL,
	};
};

export const retrievedGirls = (data: Object): Object => {
	return {
		type: type.RECEIVED_DATA_GIRL,
		data
	};
};

export const retrievedMoreGirls = (data: Object): Object => {
	return {
		type: type.RECEIVED_MORE_DATA_GIRL,
		data
	};
};