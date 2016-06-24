import React, {
	Component
} from "react"
import {
	StyleSheet,
	View,
	ListView,
	RefreshControl
} from "react-native";
import {
	getGirls,
	getNextPageGirls
} from '../actions/girls';

import LoadingMore from './loadingMore';
import GirlItem from './girlItem';

class GirlsList extends Component {

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
		dispatch(getGirls());
	}

	render() {
		const {
			girls
		} = this.props;
		console.log('render...................');
		let dataSource = this.state.dataSource.cloneWithRows(girls.girls)

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
		              refreshing={girls.isLoading}
		              onRefresh={()=>this.onRefresh()}
		              colors={['#272822']}/>}/>
		     </View>
		);
	}

	renderRow(item) {
		console.log('rederRow.........');
		return (
			<GirlItem  {...this.props} item={item}/>
		);
	}

	renderFooter() {
		console.log('rederFooter.........');
		return (<LoadingMore />);
	}

	onEndReach() {
		const {
			dispatch
		} = this.props;
		dispatch(getNextPageGirls());
	}

	onRefresh() {
		const {
			dispatch
		} = this.props;

		dispatch(getGirls());
	}



}


export default GirlsList;