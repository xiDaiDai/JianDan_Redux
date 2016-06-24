/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
	connect
} from 'react-redux'
import {
	getNews
} from '../actions/newsdetail'

import React, {
	Component,
	PropTypes

} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	WebView,
	View,
	ToastAndroid,
	ToolbarAndroid
} from 'react-native';

import NewsDetail from '../components/newsDetail';

class NewsDetailContainer extends Component {
	constructor(props) {
		super(props);
	}



	render() {
		return (
			<View style={styles.container}>
				<NewsDetail {...this.props} />
			</View>
		);
	}

}


function mapStateToProps(state) {

	console.log(state);
	const {
		newsdetail
	} = state
	return {
		newsdetail
	};
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
	},
	toolBar: {
		backgroundColor: '#232320',
		height: 50,
	},

});

export default connect(mapStateToProps)(NewsDetailContainer);