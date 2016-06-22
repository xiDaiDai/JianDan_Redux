import {
	connect
} from 'react-redux'
import {
	getNews,
	getNextPageNews,
} from '../actions/read'

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

	componentDidMount() {
		this.props.getNews();
	}

	render() {
		const {
			news,
			isLoading
		} = this.props;

		return (
			<View style={styles.container}>
				<NewsList {...this.props} getNext={()=>this.getNextPageNews()} onRefresh={()=>this.doRefresh()}></NewsList>
          	</View>
		);
	}

	getNextPageNews() {
		this.props.getNextPageNews();
	}

	doRefresh() {
		this.props.getNews();
	}
}



function mapStateToProps(state) {
	return {
		news: state.news,
		isLoading: state.isLoading,
		hasNewsToDisplay: state.hasNewsToDisplay,
		isLoadingTail: state.isLoadingTail
	};
}


function mapDispatchToProps(dispatch) {
	return {
		getNews: () => dispatch(getNews()),
		getNextPageNews: () => dispatch(getNextPageNews()),
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);