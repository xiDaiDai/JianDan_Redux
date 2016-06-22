import {
	errorOnReceivingNews,
	retrievedNews,
	retrievedMoreNews
} from '../actions/read'


const baseUrl = "http://jandan.net/?oxwlxojflwblxbsapi=get_recent_posts&include=url,date,title,custom_fields&custom_fields=thumb_c,views&dev=1&page=";


class NewsService {

	constructor() {
		this.pageNumber = 1;
	}

	fetchNews(dispatch) {
		this.pageNumber = 1;
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