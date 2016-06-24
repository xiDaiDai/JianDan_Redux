import React, {
	Component
} from "react"
import {
	StyleSheet,
	View,
	ListView,
	RefreshControl
} from "react-native";
import JokeItem from './jokeItem';
import {
	getJokes,
	getNextPageJokes
} from '../actions/joke';

import LoadingMore from './loadingMore';

class JokeList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2,
			}),
		};
	}

	componentDidMount() {
		const {
			dispatch,
		} = this.props;
		dispatch(getJokes());
	}

	render() {
		const {
			joke
		} = this.props;
		let dataSource = this.state.dataSource.cloneWithRows(joke.jokes)
		return (
			<View style={{flex:1}}>
		        <ListView
		          dataSource={dataSource}
		          renderRow={(item)=>this.renderRow(item)}
		          onEndReached={()=>this.onEndReach()}
		          onEndReachedThreshold={30}
		          renderFooter={()=>this.renderFooter()}
		          enableEmptySections = {true}
		          refreshControl={
		            <RefreshControl
		              refreshing={joke.isLoading}
		              onRefresh={()=>this.onRefresh()}
		              colors={['#272822']}/>}/>
		     </View>
		);
	}

	renderRow(item) {
		return (
			<JokeItem  {...this.props} item={item}/>
		);
	}

	renderFooter() {
		return (<LoadingMore />);
	}

	onEndReach() {
		const {
			dispatch
		} = this.props;
		dispatch(getNextPageJokes());
	}

	onRefresh() {
		const {
			dispatch
		} = this.props;
		dispatch(getJokes());
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
});


export default JokeList;