import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ImagePickerAlan from '../components/ImagePickerAlan';
console.log(ImagePickerAlan);

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };
  render() {
    return (
      <ScrollView style={styles.container}>

        <ImagePickerAlan></ImagePickerAlan>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
