 import React, {
 	Component
 } from 'react';

 import {
 	Navigator,
 	View,
 	StatusBar,
 	StyleSheet,
 	ToastAndroid
 } from 'react-native';

 import Splash from './components/splash';
 class App extends Component {
 	constructor(props) {
 		super(props);
 	}
 	render() {
 		return (
 			<Navigator
	              style={styles.container}
	              initialRoute={{component: Splash}}
	              configureScene={() => Navigator.SceneConfigs.PushFromRight}
	              renderScene={(route,navigator)=>this.renderScene(route,navigator)}/>
 		);
 	}


 	renderScene(route, navigator) {
 		return (<route.component navigator={navigator} route={route} />);
 	}
 }

 const styles = StyleSheet.create({
 	container: {
 		flex: 1,
 		justifyContent: 'center',
 	},
 });

 export default App;