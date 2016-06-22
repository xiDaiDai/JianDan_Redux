import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Dimensions,
	Image,
	View,
	Animated
} from 'react-native'

import HomeContainer from '../containers/homeContainer';
import * as Device from '../constants/device';

class Splash extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fadeAnim: new Animated.Value(0)
		};
	}

	componentDidMount() {
		const {
			navigator
		} = this.props;

		Animated.timing(
			this.state.fadeAnim, {
				toValue: 1,
				duration: 2000,
			}
		).start(() => {
			navigator.resetTo({
				component: HomeContainer,
				name: 'homeContainer'
			});
		});



		/*setTimeout(() => {
			InteractionManager.runAfterInteractions(() => {

			});
		}, 2000);*/
	}

	render() {
		return (<Animated.View style = {[styles.container, {opacity: this.state.fadeAnim}]}>
					<Image source={require('../images/splash.jpg')} style={styles.centerImage}/>
				</Animated.View>);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	},

	centerImage: {
		flex: 1,
		width: Device.WIDTH,
		height: Device.HEIGHT
	}

});

export default Splash;