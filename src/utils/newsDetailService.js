import {
	errorOnReceivingNewsDetail,
	retrievedNewsDetail,
	retrievedMoreNewsDetail
} from '../actions/newsdetail'


const detail_url = "http://i.jandan.net/?oxwlxojflwblxbsapi=get_post&include=content&id=";


class NewsService {

	fetchNews(dispatch, id) {

		let url = detail_url + id;
		fetch(url)
			.then((response) => response.json())
			.catch((error) => {
				dispatch(errorOnReceivingNewsDetail());
			})
			.then((responseData) => {
				dispatch(retrievedNewsDetail(responseData));
			}).done();
	}



}

export default new NewsService();