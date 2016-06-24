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
import codePush from "react-native-code-push";
import Home from '../components/home';

class HomeContainer extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		codePush.sync();
	}

	render() {
		return (<Home {...this.props}/>);
	}

}


export default HomeContainer;