import {
	errorOnReceivingNewsDetail,
	retrievedNewsDetail,
	retrievedMoreNewsDetail
} from '../actions/newsdetail'


const detail_url = "http://i.jandan.net/?oxwlxojflwblxbsapi=get_post&include=content&id=";


class NewsService {

	fetchNews(dispatch) {

		let url = detail_url + this.pageNumber;
		fetch(url)
			.then((response) => response.json())
			.catch((error) => {
				dispatch(errorOnReceivingNewsDetail());
			})
			.then((responseData) => {
				dispatch(retrievedNewsDetail(responseData));
			}).done();
	}

	fetchNextPageNews(dispatch) {
		this.pageNumber += 1;
		let url = detail_url + this.pageNumber;
		fetch(url)
			.then((response) => response.json())
			.catch((error) => {
				dispatch(errorOnReceivingNewsDetail());
			})
			.then((responseData) => {
				dispatch(retrievedMoreNewsDetail(responseData));
			}).done();
	}


}

export default new NewsService();