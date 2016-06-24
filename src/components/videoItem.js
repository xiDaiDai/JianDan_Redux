'use strict';

import React, {
	Component,
	PropTypes
} from 'react'
import {
	Image,
	StyleSheet,
	Text,
	TouchableHighlight,
	TouchableNativeFeedback,
	ToastAndroid,
	View
} from 'react-native';

import * as Device from '../constants/device';

class VideoItem extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const newsItem = this.props.item;
		if (!newsItem.videos[0]) return null;
		return (
			<TouchableHighlight underlayColor='white' onPress={()=>{}}>
		         <View style={styles.item}>
			         <View style={{flex:7,alignItems:'center'}}>
			                <Image  source={{uri:newsItem.videos[0].thumbnail}}
			                        style={{height:(Device.WIDTH-40)*(7/20),width:(Device.WIDTH-32)/2,borderRadius:5}}>
			                </Image>
			          </View> 
			          <View style={{paddingLeft:10,paddingRight:10,flex:2}}>
			                 <Text style={{fontSize:12,justifyContent:'center'}} numberOfLines={2}>{newsItem.videos[0].title}</Text>
			          </View>
			          <View style={{paddingLeft:10,paddingRight:10,flexDirection :'row',flex:1}}>
			                <View style={{flexDirection :'row'}}>
			                  <Text style={{fontSize:11,paddingRight:15}}>OO {newsItem.vote_positive}</Text>
			                  <Text style={{fontSize:11,paddingRight:15}}>XX {newsItem.vote_negative}</Text>
			                  <Text style={{fontSize:11,paddingRight:15}}>吐槽 {newsItem.vote_positive}</Text>
			                </View>
			                <View style={{flex:1 ,alignItems:'flex-end'}}>
			                 <Text style={{fontSize:11,fontWeight:'bold',justifyContent:'center'}}>. . .</Text>
			                </View>
			          </View>    
		          </View>
		      </TouchableHighlight>

		);
	}


	// selectItem(item) {
	// 	this.props.navigator.push({
	// 		name: 'news',
	// 		item: item,
	// 		component: NewsDetailContainer,
	// 	});

	// }
}

const styles = StyleSheet.create({

	item: {
		height: (Device.WIDTH - 30) / 2,
		width: (Device.WIDTH - 30) / 2,
		backgroundColor: 'white',
		flexDirection: 'column',
		margin: 5,
		borderRadius: 5,
		borderWidth: 0.5,
		borderColor: '#A8AFB3',
		flex: 1
	}
});

export default VideoItem;