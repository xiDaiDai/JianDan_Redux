import * as type from '../constants/AppType';
import Jokeservice from '../utils/jokeService'

export const fetchJokes = (): Object => {
	return {
		type: type.FETCHING_JOKE
	}
}

export const fetchNextPageJokes = (): Object => {
	return {
		type: type.FETCHING_NEXT_PAGE_JOKE
	}
}

export const getJokes = (): Function => {
	return (dispatch) => {
		dispatch(fetchJokes());
		Jokeservice.fetchJokes(dispatch);
	};
};


export const getNextPageJokes = (): Function => {
	return (dispatch) => {
		dispatch(fetchNextPageJokes());
		Jokeservice.fetchNextPageJokes(dispatch);
	};
};

export const errorOnReceivingJokes = (): Object => {
	return {
		type: type.ERROR_GETTING_JOKE,
	};
};

export const retrievedJokes = (data: Object): Object => {
	return {
		type: type.RECEIVED_DATA_JOKE,
		data
	};
};

export const retrievedMoreJokes = (data: Object): Object => {
	return {
		type: type.RECEIVED_MORE_DATA_JOKE,
		data
	};
};