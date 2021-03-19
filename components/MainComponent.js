import React, { Component } from 'react'
import { View, StyleSheet, Text, Platform } from 'react-native'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from './HomeComponent'
import Stats from './StatsComponent'
import About from './AboutComponent'

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Stats: {
    screen: Stats
  },
  About: {
    screen: About
  }
})

const AppContainer = createAppContainer(AppNavigator)

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
        }}
      >
        <AppContainer />
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
  }
})

export default Main
