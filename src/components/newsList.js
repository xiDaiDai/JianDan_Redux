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

	render() {
		let {
			news
		} = this.props;
		return (<View style={styles.container}>
						<ListView ref = "listview" 
						dataSource = {this.state.dataSource.cloneWithRows(news)}
						renderRow = {(item) => this.renderRow(item)}
						onEndReached = {this.props.getNext}
						renderFooter = {() => this.renderFooter()}
						enableEmptySections = {true}
						automaticallyAdjustContentInsets = {false}
						keyboardDismissMode = "on-drag"
						keyboardShouldPersistTaps = {true}
						refreshControl = {
							<RefreshControl
						          refreshing={this.props.isLoading}
						          onRefresh={()=>this.props.onRefresh}
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



}


const styles = StyleSheet.create({
	container: {
		flex: 1
	},

});


export default NewsList;