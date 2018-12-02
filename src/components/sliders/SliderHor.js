import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Swiper from 'react-native-swiper';
import FastImage from 'react-native-fast-image';

export default class SliderHor extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false}>
        <View style={styles.slide1}>
          <FastImage
            style={styles.imagePL}
            source={{
              uri: 'http://unsplash.it/512/512?random&gravity=center',
              priority: FastImage.priority.normal,
              cache: FastImage.cacheControl.web
            }}
          />
        </View>
        <View style={styles.slide2}>
          <FastImage
            style={styles.imagePL}
            source={{
              uri: 'http://unsplash.it/512/512?random&gravity=center',
              priority: FastImage.priority.normal,
              cache: FastImage.cacheControl.web
            }}
          />
        </View>
        <View style={styles.slide3}>
          <FastImage
            style={styles.imagePL}
            source={{
              uri: 'http://unsplash.it/512/512?random&gravity=center',
              priority: FastImage.priority.normal,
              cache: FastImage.cacheControl.web
            }}
          />
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  imagePL: {
    width: '100%',
    height: '100%'
  }
});
