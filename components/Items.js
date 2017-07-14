import React from 'react';
import { TouchableHighlight, View, Text} from 'react-native';
import Item from '../components/Item';

let constants = require('../constants/Constants');

export default class Items extends React.Component {
  state = {
    items: null,
  };
  render() {
    var items = constants.challenges.map(function(item, index){
      return (
        <Item key={index}
          id={index}
          name={item.name}
        />
      );
    });
    return (
      <View>
        {items}
      </View>
    );
  }
}
