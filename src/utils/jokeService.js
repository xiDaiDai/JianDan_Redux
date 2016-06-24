import {
	errorOnReceivingJokes,
	retrievedJokes,
	retrievedMoreJokes
} from '../actions/joke'

const baseUrl = "http://jandan.net/?oxwlxojflwblxbsapi=jandan.get_duan_comments&page="


class JokesService {

	constructor() {
		this.pageNumber = 1;
	}

	fetchJokes(dispatch) {
		this.pageNumber = 1;
		let url = baseUrl + this.pageNumber;
		fetch(url)
			.then((response) => response.json())
			.catch((error) => {
				dispatch(errorOnReceivingJokes());
			})
			.then((responseData) => {
				dispatch(retrievedJokes(responseData));
			}).done();
	}

	fetchNextPageJokes(dispatch) {
		this.pageNumber += 1;
		let url = baseUrl + this.pageNumber;
		fetch(url)
			.then((response) => response.json())
			.catch((error) => {
				dispatch(errorOnReceivingJokes());
			})
			.then((responseData) => {
				dispatch(retrievedMoreJokes(responseData));
			}).done();
	}


}

export default new JokesService();