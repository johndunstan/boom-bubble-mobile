import React, { Component } from 'react'
import {
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  Platform
} from 'react-native'
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { Icon } from 'react-native-elements'
import Home from './HomeComponent'
import Stats from './StatsComponent'
import About from './AboutComponent'

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#5637DD'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff'
      },
      headerLeft: (
        <Icon
          name="bars"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  }
)

const StatsNavigator = createStackNavigator(
  {
    Stats: { screen: Stats }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#5637DD'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff'
      },
      headerLeft: (
        <Icon
          name="bars"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  }
)

const AboutNavigator = createStackNavigator(
  {
    About: { screen: About }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#5637DD'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff'
      },
      headerLeft: (
        <Icon
          name="bars"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  }
)

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <View style={styles.drawerHeader}>
        <View style={{ flex: 2, paddingLeft: 10 }}>
          <Text style={styles.drawerHeaderText}>Boom Bubble</Text>
        </View>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
)

const MainNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="home" type="font-awesome" size={24} color={tintColor} />
        )
      }
    },
    Stats: {
      screen: StatsNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="home" type="font-awesome" size={24} color={tintColor} />
        )
      }
    },
    About: {
      screen: AboutNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="home" type="font-awesome" size={24} color={tintColor} />
        )
      }
    }
  },
  {
    initialRouteName: 'Home',
    drawerBackgroundColor: '#CEC8FF',
    contentComponent: CustomDrawerContentComponent
  }
)

const AppNavigator = createAppContainer(MainNavigator)

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
        }}
      >
        <AppNavigator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  drawerHeader: {
    backgroundColor: '#5637DD',
    height: 140,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 10,
    height: 60,
    width: 60
  },
  stackIcon: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 24
  }
})

export default Main
