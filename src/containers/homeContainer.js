import React, {
	Component
} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	DrawerLayoutAndroid,
	ToolbarAndroid,
	ToastAndroid,
	StatusBar
} from 'react-native';
import {
	connect
} from 'react-redux'

import Home from '../components/home';

class HomeContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (<Home {...this.props}/>);
	}

}


export default HomeContainer;