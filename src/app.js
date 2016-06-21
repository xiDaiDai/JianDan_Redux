 import React, {
 	Component
 } from 'react';

 import {
 	Navigator,
 	View,
 	StatusBar,
 	StyleSheet
 } from 'react-native';
 import {
 	connect
 } from 'react-redux'

 import {
 	changeSplashed
 } from './actions/index'

 import Splash from './components/splash';
 import Home from './containers/home';


 class App extends Component {

 	constructor(props) {
 		super(props);
 	}
 	render() {
 		const {
 			isSplashed
 		} = this.props;
 		if (isSplashed) {
 			let initialRoute = {
 				name: 'home',
 				component: Home,
 			}
 			return (
 				<Navigator
	              style={styles.container}
	              initialRoute={initialRoute}
	              configureScene={() => Navigator.SceneConfigs.PushFromRight}
	              renderScene={(route,navigator)=>this.renderScene(route,navigator)}/>
 			);
 		} else {
 			return (
 				<View style={styles.container}>
                    <StatusBar
                      backgroundColor='transparent'
                      translucent={true}/>
                   <Splash/>
                </View>);
 		}
 	}


 	renderScene(route, navigator) {
 		return (<route.component navigator={navigator} route={route} />);
 	}

 	componentDidMount() {
 		setTimeout(() => {
 			this.changeSplashed();
 		}, 4000);

 	}

 	changeSplashed() {
 		this.props.changeSplashed();
 	}
 }

 function mapStateToProps(state) {
 	return {
 		isSplashed: state.isSplashed,
 	};
 }


 function mapDispatchToProps(dispatch) {
 	return {
 		changeSplashed: () => dispatch(changeSplashed()),
 	};
 }

 const styles = StyleSheet.create({
 	container: {
 		flex: 1,
 		justifyContent: 'center',
 	},
 });

 export default connect(mapStateToProps, mapDispatchToProps)(App);