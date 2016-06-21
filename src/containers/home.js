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
import NewsList from './freshNews';


const toolBarActions = [{
  title: '刷新',
  icon: require('../images/ic_refresh_white_24dp.png'),
  show: 'always'
}];


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '新鲜事',
    };
  }

  componentDidMount() {
    this.setState({
      centerContent: <NewsList/>
    });
  }

  render() {
    return (
      <View style={styles.container}>
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
                    actions={toolBarActions}
                    onIconClicked={() => this.refs.drawerLayoutAndroid.openDrawer()}
                     />
                    {this.state.centerContent}                    
              </View>
          </DrawerLayoutAndroid>
      </View>
    );
  }

  renderNavigationView() {
    return (<DrawerList  onItemSelected={(theme)=>this.onItemSelected(theme)}/>);
  }


  onItemSelected(theme) {
    ToastAndroid.show(theme, ToastAndroid.LONG);
    this.refs.drawerLayoutAndroid.closeDrawer();
    switch (theme) {
      case 'freshNews':
        this.setState({
          centerContent: <NewsList/>,
          title: '新鲜事'
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