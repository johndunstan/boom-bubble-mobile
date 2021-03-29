import React, { Component } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

class Menubar extends Component {
  constructor(props) {
    super(props)
    this.state = { value: this.props.items.length }
  }

  handleAddItem = () => {
    this.setState({ value: Number(this.state.value) + 1 })
    this.props.addItem()
  }

  handleSubtractItem = () => {
    this.setState({ value: Number(this.state.value) - 1 })
    this.props.subtractItem()
  }

  render() {
    const completedItems = this.props.items.filter(
      (item) => item.isComplete === true
    )

    return (
      <View style={styles.container}>
        <Text>Total: {this.state.value}</Text>
        <Text>Complete: {completedItems.length}</Text>
        <Button title="Add" onPress={() => this.handleAddItem()} />
        <Button title="Remove" onPress={() => this.handleSubtractItem()} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'space-between',
    // flexWrap: 'wrap',
    width: '100%'
  }
})

export default Menubar
