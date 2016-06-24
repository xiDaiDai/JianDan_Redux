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

import PicsList from '../components/picsList';
import {
	connect
} from 'react-redux';

class PicsContainer extends Component {


	render() {
		return (
			<View style={{flex:1}}>
       			<PicsList {...this.props} />
            </View>);
	}

}


function mapStateToProps(state) {
	const {
		pics
	} = state
	return {
		pics
	};
}

export default connect(mapStateToProps)(PicsContainer);