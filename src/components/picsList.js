import React, {
	Component
} from "react"
import {
	StyleSheet,
	View,
	Text,
	ListView,
	RefreshControl
} from "react-native";
import PicsItem from './picsItem';
import {
	getPics,
	getNextPagePics
} from '../actions/pics';

import LoadingMore from './loadingMore';

class PicsList extends Component {

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
		dispatch(getPics());

	}

	render() {
		const {
			pics
		} = this.props;
		let dataSource = this.state.dataSource.cloneWithRows(pics.pics)
		return (
			<View style={{flex:1}}>
        <ListView
          dataSource={dataSource}
          renderRow={(item)=>this.renderRow(item)}
          onEndReached={()=>this.onEndReach()}
          onEndReachedThreshold={30}
          enableEmptySections = {true}
          renderFooter={()=>this.renderFooter()}
          refreshControl={
            <RefreshControl
              refreshing={pics.isLoading}
              onRefresh={()=>this.onRefresh()}
              colors={['#272822']}/>}/>
      </View>
		);
	}

	renderRow(item) {
		return (
			<PicsItem  {...this.props} item={item}/>
		);
	}

	renderFooter() {
		return (<LoadingMore />);
	}

	onEndReach() {
		const {
			dispatch
		} = this.props;
		dispatch(getNextPagePics());
	}

	onRefresh() {
		const {
			dispatch
		} = this.props;

		dispatch(getPics());
	}



}


const styles = StyleSheet.create({
	container: {
		flex: 1
	},

});


export default PicsList;