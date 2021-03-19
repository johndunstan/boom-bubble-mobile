import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

Stats['navigationOptions'] = (screenProps) => ({
  title: 'Stats'
})

function Stats(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello, Stats!</Text>
    </View>
  )
}

export default Stats
