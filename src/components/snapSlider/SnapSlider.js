import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { ENTRIES1, ENTRIES2 } from '../../assets/data/entries';
import { wpH, wpW } from '../../helpers/helpers';

// const slideHeight = viewportHeight * 0.36;
// const sliderWidth = viewportWidth;
// const itemWidth = slideWidth + itemHorizontalMargin * 2;
// const itemHorizontalMargin = wp(2);
//

const sliderWidth = wpW(100);
const sliderHeight = wpH(30);

const itemWidth = sliderWidth;
const itemHeight = sliderHeight;

export default class SnapSlider extends Component {
  //
  _renderItem({ item, index }) {
    return (
      <View>
        <ImageBackground
          style={styles.image}
          source={{ uri: item.illustration }}
        >
          <Text>{item.title}</Text>
        </ImageBackground>
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
        sliderHeight={sliderHeight}
        itemWidth={itemWidth}
      />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: itemWidth,
    height: itemHeight
  }
});
