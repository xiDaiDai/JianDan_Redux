import * as type from '../constants/AppType';
import service from '../utils/newsDetailService'

export const fetchNews = (): Object => {
	return {
		type: type.FETCHING_DETAIL_NEWS
	}
}



export const getNews = (): Function => {
	return (dispatch) => {
		dispatch(fetchNews());
		service.fetchNews(dispatch);
	};
};



export const errorOnReceivingNews = (): Object => {
	return {
		type: type.ERROR_DETAIL_NEWS,
	};
};

export const retrievedNews = (data: Object): Object => {
	return {
		type: type.RECEIVED_DETAIL_NEWS,
		data
	};
};