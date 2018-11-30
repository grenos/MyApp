import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  Platform,
  View,
  Text,
  Image
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { ENTRIES1, ENTRIES2 } from '../../assets/data/entries';

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  'window'
);

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2;

export default class SnapSlider extends Component {
  //
  _renderItem({ item, index }) {
    return (
      <View>
        <Text>{item.title}</Text>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: item.illustration }}
        />
      </View>
    );
  }

  render() {
    return (
      <Carousel
        ref={c => {
          this._carousel = c;
        }}
        data={ENTRIES1}
        renderItem={this._renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
      />
    );
  }
}
