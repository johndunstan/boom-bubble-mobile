import React, { Component } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import Menubar from './MenubarComponent'
import DisplayItems from './DisplayItemsComponent'

class Countdown extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Menubar
          showCompleted={this.props.showCompleted}
          items={this.props.items}
          name={this.props.name}
          toggleShowComplete={this.props.toggleShowComplete}
          addItem={this.props.addItem}
          subtractItem={this.props.subtractItem}
          changeTotal={this.props.changeTotal}
          resetState={this.props.resetState}
        />
        <DisplayItems
          showCompleted={this.props.showCompleted}
          completeItem={this.props.completeItem}
          items={this.props.items}
          style={styles.item}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ff8',
    alignItems: 'stretch',
    justifyContent: 'center',

    flexWrap: 'wrap',
    width: '100%'
  }
})

export default Countdown
