import React from 'react'
import { SafeAreaView } from 'react-native'
import { View, StyleSheet, Text, Button, FlatList } from 'react-native'
import { Icon } from 'react-native-elements'

function DisplayItems(props) {
  function RenderItem(item) {
    if (!item.isComplete) {
      return (
        <Icon
          key={item.id}
          reverse
          raised
          name="dog"
          type="font-awesome-5"
          color="blue"
          onPress={() => {
            props.completeItem(item.id)
          }}
        />
      )
    } else if (props.showCompleted && item.isComplete) {
      return (
        <Icon
          key={item.id}
          reverse
          raised
          name="bone"
          type="font-awesome-5"
          color="blue"
          onPress={() => {
            props.completeItem(item.id)
          }}
        />
      )
    }
  }

  return (
    <View>
      <SafeAreaView>
        <FlatList />
      </SafeAreaView>
      <View style={styles.item}>
        {props.items.map((item) => RenderItem(item))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  // Somehow adding this style break buttons working?!
  // it seems like I probably need to use a FlatList to render the buttons
  // item: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   backgroundColor: '#f88',
  //   alignItems: 'stretch',
  //   justifyContent: 'center',
  //   flexWrap: 'wrap'
  // }
})

export default DisplayItems
