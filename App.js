import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Main from './components/MainComponent'

export default function App() {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

// import React from 'react'
// import { View, Text, Button } from 'react-native'
// import { createAppContainer } from 'react-navigation'
// import { createStackNavigator } from 'react-navigation-stack'

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     )
//   }
// }

// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//       </View>
//     )
//   }
// }

// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen
//   },
//   Details: {
//     screen: DetailsScreen
//   }
// })

// const AppContainer = createAppContainer(AppNavigator)

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />
//   }
// }

// export default createAppContainer(AppNavigator)
