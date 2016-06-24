import {
	errorOnReceivingPics,
	retrievedPics,
	retrievedMorePics
} from '../actions/pics'


const baseUrl = "http://jandan.net/?oxwlxojflwblxbsapi=jandan.get_pic_comments&page=";


class PicsService {

	constructor() {
		this.pageNumber = 1;
	}

	fetchPics(dispatch) {
		this.pageNumber = 1;
		let url = baseUrl + this.pageNumber;
		fetch(url)
			.then((response) => response.json())
			.catch((error) => {
				dispatch(errorOnReceivingPics());
			})
			.then((responseData) => {
				dispatch(retrievedPics(responseData));
			}).done();
	}

	fetchNextPagePics(dispatch) {
		this.pageNumber += 1;
		let url = baseUrl + this.pageNumber;
		fetch(url)
			.then((response) => response.json())
			.catch((error) => {
				dispatch(errorOnReceivingPics());
			})
			.then((responseData) => {
				dispatch(retrievedMorePics(responseData));
			}).done();
	}


}

export default new PicsService();