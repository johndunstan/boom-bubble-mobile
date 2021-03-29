import React, { Component } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import Countdown from './countdown/CountdownComponent'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showCompleted: true,
      listOfLists: [
        {
          id: this.idGenerator(),
          name: 'Items to Complete',
          items: [
            this.createNewItem(),
            this.createNewItem(),
            this.createNewItem(),
            this.createNewItem(),
            this.createNewItem(),
            this.createNewItem(),
            this.createNewItem(),
            this.createNewItem()
          ]
        }
      ]
    }
  }

  resetState = () => {
    console.log('State reset!')

    const initialState = {
      showCompleted: true,
      listOfLists: [
        {
          id: this.idGenerator(),
          name: 'Items to Complete',
          items: [
            this.createNewItem(),
            this.createNewItem(),
            this.createNewItem(),
            this.createNewItem(),
            this.createNewItem()
          ]
        }
      ]
    }

    this.setState(initialState)
  }

  idGenerator = () => {
    //TODO: Investigate & implement better idGenerator function
    return Math.floor(Math.random() * 1000000000000 + 1)
  }

  createNewItem = () => {
    return {
      id: this.idGenerator(),
      isComplete: false,
      description: null,
      date: null,
      time: null,
      duration: null
    }
  }

  addItem = () => {
    const newListOfLists = { ...this.state.listOfLists }
    const newItem = this.createNewItem()

    newListOfLists[0].items.push(newItem)
    this.setState({ listOfLists: newListOfLists })
  }

  subtractItem = () => {
    const newListOfLists = { ...this.state.listOfLists }
    newListOfLists[0].items.pop()

    this.setState({ listOfLists: newListOfLists })
  }

  changeTotal = (newTotal) => {
    const itemsToAdjust = newTotal - this.state.listOfLists[0].items.length
    const newListOfLists = { ...this.state.listOfLists }

    if (itemsToAdjust > 0) {
      for (let i = 0; i < itemsToAdjust; i++) {
        newListOfLists[0].items.push(this.createNewItem())
      }
    } else {
      for (let i = itemsToAdjust; i < 0; i++) {
        newListOfLists[0].items.pop()
      }
    }

    this.setState({ listOfLists: newListOfLists })
  }

  completeItem = (id) => {
    console.log('completeItem triggered')
    this.setState(
      this.state.listOfLists[0].items.map((item) => {
        if (item.id === id) {
          item.isComplete = !item.isComplete
        }
        return item
      })
    )
  }

  toggleShowComplete = (showCompleted) => {
    this.setState({ showCompleted: !showCompleted })
  }

  static navigationOptions = {
    title: 'Home'
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Countdown
          showCompleted={this.state.showCompleted}
          items={this.state.listOfLists[0].items}
          addItem={this.addItem}
          subtractItem={this.subtractItem}
          changeTotal={this.changeTotal}
          completeItem={this.completeItem}
          deleteItem={this.deleteItem}
          resetState={this.resetState}
          toggleShowComplete={this.toggleShowComplete}
        />
      </View>
    )
  }
}

export default Home
