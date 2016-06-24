import {
	errorOnReceivingVideos,
	retrievedVideos,
	retrievedMoreVideos
} from '../actions/videos'


const baseUrl = "http://jandan.net/?oxwlxojflwblxbsapi=jandan.get_video_comments&page=";


class VideosService {

	constructor() {
		this.pageNumber = 1;
	}

	fetchVideos(dispatch) {
		this.pageNumber = 1;
		let url = baseUrl + this.pageNumber;
		fetch(url)
			.then((response) => response.json())
			.catch((error) => {
				dispatch(errorOnReceivingVideos());
			})
			.then((responseData) => {
				dispatch(retrievedVideos(responseData));
			}).done();
	}

	fetchNextPageVideos(dispatch) {
		this.pageNumber += 1;
		let url = baseUrl + this.pageNumber;
		fetch(url)
			.then((response) => response.json())
			.catch((error) => {
				dispatch(errorOnReceivingVideos());
			})
			.then((responseData) => {
				dispatch(retrievedMoreVideos(responseData));
			}).done();
	}


}

export default new VideosService();