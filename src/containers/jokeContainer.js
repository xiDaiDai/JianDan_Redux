/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
	Component
} from 'react';
import {
	connect
} from 'react-redux'
import {
	StyleSheet,
	View,
} from 'react-native';
import JokeList from '../components/jokeList';



class JokeContainer extends Component {

	render() {
		return (
			<View style={styles.container}>
				<JokeList {...this.props} ></JokeList>
          	</View>
		);
	}

}

function mapStateToProps(state) {
	const {
		joke
	} = state
	return {
		joke
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	}
});

export default connect(mapStateToProps)(JokeContainer);