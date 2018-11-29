import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';

import SliderHor from '../components/sliders/SliderHor';
import SliderVert from '../components/sliders/SliderVert';

export default class Sliders extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" />
        <View style={styles.SliderHor}>
          <SliderHor />
        </View>
        <View style={styles.SliderVert}>
          <SliderVert />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  SliderHor: {
    flex: 1
  },
  SliderVert: {
    flex: 2
  }
});
