import {
	connect
} from 'react-redux'
import React, {
	Component,
	PropTypes

} from 'react';
import {
	View,
	StyleSheet
} from 'react-native';

import NewsList from '../components/newsList';

class NewsContainer extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<NewsList {...this.props} ></NewsList>
          	</View>
		);
	}
}



function mapStateToProps(state) {
	const read = {
		news,
		isLoading,
		hasNewsToDisplay,
		loadMoreNews
	} = state
	return {
		read
	};
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	}
});

export default connect(mapStateToProps)(NewsContainer);