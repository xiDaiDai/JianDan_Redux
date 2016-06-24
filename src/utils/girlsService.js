import {
	errorOnReceivingGirls,
	retrievedGirls,
	retrievedMoreGirls
} from '../actions/girls'


const baseUrl = "http://jandan.net/?oxwlxojflwblxbsapi=jandan.get_ooxx_comments&page=";


class GirlsService {

	constructor() {
		this.pageNumber = 1;
	}

	fetchGirls(dispatch) {
		this.pageNumber = 1;
		let url = baseUrl + this.pageNumber;
		fetch(url)
			.then((response) => response.json())
			.catch((error) => {
				dispatch(errorOnReceivingGirls());
			})
			.then((responseData) => {
				dispatch(retrievedGirls(responseData));
			}).done();
	}

	fetchNextPageGirls(dispatch) {
		this.pageNumber += 1;
		let url = baseUrl + this.pageNumber;
		fetch(url)
			.then((response) => response.json())
			.catch((error) => {
				dispatch(errorOnReceivingGirls());
			})
			.then((responseData) => {
				dispatch(retrievedMoreGirls(responseData));
			}).done();
	}


}

export default new GirlsService();