import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import SnapSlider from '../components/snapSlider/SnapSlider';
import { wpH, wpW } from '../helpers/helpers';

const sliderHeight = wpH(30);

export default class Sliders extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sliderContainerMD}>
          <SnapSlider />
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
  sliderContainerMD: {
    height: sliderHeight
  },
  sliderContainerSM: {
    flex: 1
  }
});
