import React, {
	Component
} from "react"
import {
	connect
} from "react-redux";
import {
	StyleSheet,
	View,
	ListView,
	RefreshControl
} from "react-native";
import VideoItem from './videoItem';
import {
	getVideos,
	getNextPageVideos
} from '../actions/videos';

import LoadingMore from './loadingMore';

class VideosList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2,
			}),
		};

	}

	componentDidMount() {
		const {
			dispatch,
		} = this.props;
		dispatch(getVideos());

	}

	render() {
		const {
			videos
		} = this.props;
		let dataSource = this.state.dataSource.cloneWithRows(videos.videos)
		return (<View style={styles.container}>
						<ListView ref = "listview" 
						contentContainerStyle={styles.list} 
						dataSource = {dataSource}
						renderRow = {(item) => this.renderRow(item)}
						onEndReached = {()=>this.onEndReach()}
						renderFooter = {() => this.renderFooter()}
						enableEmptySections = {true}
						automaticallyAdjustContentInsets = {false}
						keyboardDismissMode = "on-drag"
						keyboardShouldPersistTaps = {true}
						refreshControl = {
							<RefreshControl
						          refreshing={videos.isLoading}
						          onRefresh={()=>this.onRefresh()}
						          colors={['#272822']}/>
								}
							/>

						</View>);
	}

	renderRow(item) {
		return (
			<VideoItem  {...this.props} item={item}/>
		);
	}

	renderFooter() {
		return (<LoadingMore />);
	}

	onEndReach() {
		const {
			dispatch
		} = this.props;
		dispatch(getNextPageVideos());
	}

	onRefresh() {
		const {
			dispatch
		} = this.props;

		dispatch(getVideos());
	}



}


const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	list: {
		padding: 5,
		flexDirection: 'row',
		flexWrap: 'wrap'
	},

});


export default VideosList;