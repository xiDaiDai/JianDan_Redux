'use strict';

import React, {
	Component,
	PropTypes
} from 'react'
import {
	Image,
	Platform,
	StyleSheet,
	Text,
	TouchableHighlight,
	TouchableNativeFeedback,
	ToastAndroid,
	View
} from 'react-native';

import * as Device from '../constants/device';

class PicsItem extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const newsItem = this.props.item;

		return (
			<TouchableHighlight 
            underlayColor='white'
            onPress={()=>{}}
           >
        <View style={{backgroundColor:'white',flexDirection:'column',marginTop:10,marginLeft:10,marginRight:10,borderRadius:5,borderWidth:0.5,borderColor:'#A8AFB3'}}>
          <View style={{ flexDirection :'row',padding:10,alignItems:'center'}}>          
                <Text style = {{fontSize:16,color:'#272822',paddingRight:10,fontWeight:'bold'}}>{newsItem.comment_author}</Text>
                <Text >{newsItem.comment_date}</Text>
          </View>    
          <View style={{paddingLeft:10,paddingRight:10}}>
                <Image  
                    source={{uri:newsItem.pics[0]}} 
                    style={{width:Device.WINDOW_WIDTH-40,height:300,justifyContent:'center'}}>
                </Image>
          </View> 
          <View style={{flexDirection :'row',padding:10}}>
                <View style={{flexDirection :'row'}}>
                  <Text style={{fontSize:15,paddingRight:15}}>OO {newsItem.vote_positive}</Text>
                  <Text style={{fontSize:15,paddingRight:15}}>XX {newsItem.vote_negative}</Text>
                  <Text style={{fontSize:15,paddingRight:15}}>吐槽 {newsItem.vote_positive}</Text>
                </View>
                
                <View style={{flex:1 ,alignItems:'flex-end'}}>
                 <Text style={{fontSize:15,fontWeight:'bold',justifyContent:'center'}}>. . .</Text>
                </View>
                
          </View>    
          
        </View>
      </TouchableHighlight>

		);
	}


}


export default PicsItem;