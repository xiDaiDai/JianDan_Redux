/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
	Component
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

import {
	getNewsDetail
} from '../actions/newsdetail';


class NewsDetail extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const {
			dispatch
		} = this.props;
		dispatch(getNewsDetail());

	}

	render() {
		// if (this.state.isloading) return (<LoadingView/>);
		return (
			<View style={styles.container}>
			      <ToolbarAndroid
			                style={styles.toolBar}
			                navIcon={require('../images/ic_arrow_back_white_18dp.png')}
			                title={'this.props.item.title'}
			                titleColor='white'
			                onIconClicked={() => this.backAndroid()}/>
			       <WebView javaScriptEnabled={true}
			                automaticallyAdjustContentInsets={true}
			                source={{html: this.props.content}}
			                style={{margin:5}}
			                />
		     </View>
		);
	}

	backAndroid() {
		this.props.navigator.pop();
	}


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

export default NewsDetail;