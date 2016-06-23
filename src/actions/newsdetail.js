import * as type from '../constants/AppType';
import service from '../utils/newsDetailService'

export const fetchNewsDetail = (): Object => {
	return {
		type: type.FETCHING_DETAIL_NEWS
	}
}



export const getNewsDetail = (): Function => {
	return (dispatch) => {
		dispatch(fetchNewsDetail());
		service.fetchNews(dispatch);
	};
};



export const errorOnReceivingNewsDetail = (): Object => {
	return {
		type: type.ERROR_DETAIL_NEWS,
	};
};

export const retrievedNewsDetail = (data: Object): Object => {
	return {
		type: type.RECEIVED_DETAIL_NEWS,
		data
	};
};