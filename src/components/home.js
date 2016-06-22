import React, {
	Component
} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	DrawerLayoutAndroid,
	ToolbarAndroid,
	ToastAndroid,
	StatusBar
} from 'react-native';
import DrawerList from '../components/drawerList';
import * as Device from '../constants/device';
import * as Drawer from '../constants/drawer';
import NewsContainer from '../containers/newsContainer';
import JokeContainer from '../containers/jokeContainer';
import PicsContainer from '../containers/picsContainer';
import GirlsContainer from '../containers/girlsContainer';
import VideosContainer from '../containers/videosContainer';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			content: <NewsContainer  {...this.props}/>,
			title: '新鲜事'
		}
	}

	render() {
		return (<View style={styles.container}>
			          <StatusBar
			           backgroundColor="#232320"
			           barStyle="light-content"
			           hidden ={false}/>
			          <DrawerLayoutAndroid
			              ref='drawerLayoutAndroid'//获取Virtula DOM节点标识
			              keyboardDismissMode = 'on-drag'
			              drawerWidth = {Device.WIDTH - Device.ALIGN_RIGHT}
			              drawerPosition = {DrawerLayoutAndroid.positions.left}
			              renderNavigationView={()=>this.renderNavigationView()}>
			              <View style={styles.container}>
			                   <ToolbarAndroid
			                    ref='toolBarandriod'
			                    style={styles.toolBar}
			                    navIcon={require('../images/ic_menu_white_18dp.png')}
			                    title={this.state.title}
			                    titleColor='white'
			                    onIconClicked={() => this.refs.drawerLayoutAndroid.openDrawer()}
			                     />
			                    {this.state.content}  
			              </View>
			          </DrawerLayoutAndroid>
			      </View>);
	}

	renderNavigationView() {
		return (<DrawerList  onItemSelected={(theme)=>this.onItemSelected(theme)}/>);
	}


	onItemSelected(theme) {
		this.refs.drawerLayoutAndroid.closeDrawer();
		switch (theme) {
			case 'freshNews':
				this.setState({
					content: <NewsContainer {...this.props}/>,
					title: '新鲜事'
				})
				break;
			case 'treeNewBee':
				this.setState({
					content: <JokeContainer {...this.props}/>,
					title: '段子'
				})
				break;
			case 'pictures':
				this.setState({
					content: <PicsContainer {...this.props}/>,
					title: '无聊图'
				})
				break;
			case 'girls':
				this.setState({
					content: <GirlsContainer {...this.props}/>,
					title: '妹子图'
				})
				break;
			case 'videos':
				this.setState({
					content: <VideosContainer {...this.props}/>,
					title: '小视频'
				})
				break;
			case 'setting':
				this.setState({
					content: <NewsContainer {...this.props}/>,
					title: '设置'
				})
				break;
		}

	}
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#E6E6E6',
	},
	content: {
		flex: 1,
		backgroundColor: '#F5FCFF',
		justifyContent: 'center',

	},
	toolBar: {
		backgroundColor: '#232320',
		height: 50,
	},

	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

export default Home;