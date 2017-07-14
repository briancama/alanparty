import 'react-native';
import React from 'react';
import { ImagePickerAlan } from '../ImagePickerAlan';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<ImagePickerAlan>Snapshot test!</ImagePickerAlan>).toJSON();

  expect(tree).toMatchSnapshot();
});
