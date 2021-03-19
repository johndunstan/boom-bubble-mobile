import React, { Component } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Stats"
          onPress={() => this.props.navigation.navigate('Stats')}
        />
        <Button
          title="Go to About"
          onPress={() => this.props.navigation.navigate('About')}
        />
      </View>
    )
  }
}

export default Home
