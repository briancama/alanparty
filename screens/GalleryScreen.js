import React from 'react';

import Gallery from 'react-native-image-gallery';

export default class GalleryScreen extends React.Component {
  static navigationOptions = {
    title: 'Gallery',
  };
  render() {
    return (
      <Gallery
        style={{flex: 1, backgroundColor: 'black'}}
        images={[
          'https://s3-us-west-1.amazonaws.com/bacheloran/gallery-images/1001484_10151498409872765_1095576536_n.jpg',
          'http://ww2.sinaimg.cn/mw690/714a59a7tw1dxqkkg0cwlj.jpg',
          'http://www.bz55.com/uploads/allimg/150122/139-150122145421.jpg'
        ]}
      />
    );
  }
}