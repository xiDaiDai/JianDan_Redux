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
	View,

} from 'react-native';

import {
	connect
} from 'react-redux';
import VideosList from '../components/videosList';

class VideosContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={{flex:1}}>
       			<VideosList {...this.props} />
            </View>);
	}


}

function mapStateToProps(state) {
	const {
		videos
	} = state
	return {
		videos
	};
}


export default connect(mapStateToProps)(VideosContainer);