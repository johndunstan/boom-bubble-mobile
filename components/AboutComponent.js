import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

About['navigationOptions'] = (screenProps) => ({
  title: 'About'
})

function About() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello, About!</Text>
    </View>
  )
}

export default About
