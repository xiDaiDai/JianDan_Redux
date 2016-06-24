import React, {
	Component
} from "react"
import {
	connect
} from "react-redux";
import {
	StyleSheet,
	View,
	Text,
	ListView,
	Platform,
	ProgressBarAndroid,
	ToastAndroid,
	RefreshControl
} from "react-native";
import NewsItem from './newsItem';
import {
	getNews,
	getNextPageNews
} from '../actions/read';

import LoadingMore from './loadingMore';

class NewsList extends Component {

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
		dispatch(getNews());

	}


	componentWillReceiveProps(nextProps) {

	}

	render() {
		const {
			read
		} = this.props;
		let dataSource = this.state.dataSource.cloneWithRows(read.news)
		return (<View style={styles.container}>
						<ListView ref = "listview" 
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
						          refreshing={read.isLoading}
						          onRefresh={()=>this.onRefresh()}
						          colors={['#272822']}/>
								}
							/>

						</View>);
	}

	renderRow(item) {
		return (
			<NewsItem  {...this.props} item={item}/>
		);
	}

	renderFooter() {
		return (<LoadingMore />);
	}

	onEndReach() {
		const {
			dispatch
		} = this.props;
		dispatch(getNextPageNews());
	}

	onRefresh() {
		const {
			dispatch
		} = this.props;

		dispatch(getNews());
	}



}


const styles = StyleSheet.create({
	container: {
		flex: 1
	},

});


export default NewsList;