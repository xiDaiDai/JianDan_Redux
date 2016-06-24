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
	View
} from 'react-native';

import {
	connect
} from 'react-redux';
import GirlsList from '../components/girlsList';

class GirlsContainer extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<View style={{flex:1}}>
       			<GirlsList {...this.props} />
            </View>);
	}



}

function mapStateToProps(state) {
	const {
		girls
	} = state;
	return {
		girls
	}
}


export default connect(mapStateToProps)(GirlsContainer);