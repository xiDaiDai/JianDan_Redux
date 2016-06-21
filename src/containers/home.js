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
import {
  changeItem
} from '../actions/drawer';
import {
  connect
} from 'react-redux'

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      const {
        title,
        component,
      } = this.props;
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
                    title={title}
                    titleColor='white'
                    onIconClicked={() => this.refs.drawerLayoutAndroid.openDrawer()}
                     />
                    <NewsList />    
              </View>
          </DrawerLayoutAndroid>
      </View>
      );
    }
    // <component />      
  renderNavigationView() {
    return (<DrawerList  onItemSelected={(theme)=>this.onItemSelected(theme)}/>);
  }


  onItemSelected(theme) {
    ToastAndroid.show(theme, ToastAndroid.LONG);
    this.refs.drawerLayoutAndroid.closeDrawer();
    () => this.changeItem();

  }

  changeItem() {
    this.props.changeItem();
  }


}

function mapStateToProps(state) {
  return {
    title: state.title,
    component: state.component,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    changeItem: () => dispatch(changeItem()),
  };
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);