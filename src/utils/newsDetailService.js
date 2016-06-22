import {
	errorOnReceivingNews,
	retrievedNews,
	retrievedMoreNews
} from '../actions/newsdetail'


const detail_url = "http://i.jandan.net/?oxwlxojflwblxbsapi=get_post&include=content&id=";


class NewsService {

	fetchNews(dispatch) {

		let url = baseUrl + this.pageNumber;
		fetch(url)
			.then((response) => response.json())
			.catch((error) => {
				dispatch(errorOnReceivingNews());
			})
			.then((responseData) => {
				dispatch(retrievedNews(responseData));
			}).done();
	}

	fetchNextPageNews(dispatch) {
		this.pageNumber += 1;
		let url = baseUrl + this.pageNumber;
		fetch(url)
			.then((response) => response.json())
			.catch((error) => {
				dispatch(errorOnReceivingNews());
			})
			.then((responseData) => {
				dispatch(retrievedMoreNews(responseData));
			}).done();
	}


}

export default new NewsService();