import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoConfigView } from '@expo/samples';
import Items from '../components/Items';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Challenges',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Items />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
