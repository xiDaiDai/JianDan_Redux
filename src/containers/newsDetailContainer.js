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

	componentDidMount() {
		this.props.getNews();
	}

	render() {
		const {
			content,
			isLoading
		} = this.props;
		return (
			<View style={styles.container}>
				<NewsDetail {...this.props} />
			</View>
		);
	}

}


function mapStateToProps(state) {
	return {
		content: state.content,
		isLoading: state.isLoading,
	};
}


function mapDispatchToProps(dispatch) {
	return {
		getNews: () => dispatch(getNews()),
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

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetailContainer);