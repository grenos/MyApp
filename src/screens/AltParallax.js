import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import AltParallaxView from '../components/altproductView/AltParallaxView';
// import ParallaxScrollView from 'react-native-parallax-scroll-view';

class AltParallax extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return <AltParallaxView />;
  }
}

export default AltParallax;
