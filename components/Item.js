import React from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';
import { Components } from 'expo';

const { LinearGradient } = Components;

export default class Item extends React.Component {
  render() {

    return (
      <View key={this.props.id} >
        <LinearGradient
          colors={['#2ceaed', '#2ceaed']}
          style = {styles.item} >
          <Text style={styles.itemText}>
            {this.props.name}
          </Text>
        </LinearGradient>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 15,
    marginBottom: 5,
    justifyContent: "center",
    borderColor: '#ed3286',
  },
  itemText: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: 'transparent',
  }
});