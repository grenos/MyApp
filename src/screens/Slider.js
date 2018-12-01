import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import SnapSlider from '../components/snapSlider/SnapSlider';
import SnapSlider2 from '../components/snapSlider/SnapSlider2';
import SnapSlider3 from '../components/snapSlider/SnapSlider3';
import { wpH, wpW } from '../helpers/helpers';

const sliderHeightSM = wpH(30);
const sliderHeightLG = wpH(40);

export default class Sliders extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView />
        <View style={styles.sliderContainerSM}>
          <SnapSlider />
        </View>
        <View style={styles.sliderContainerLG}>
          <SnapSlider2 />
        </View>
        <View style={styles.sliderContainerSM}>
          <SnapSlider3 />
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
  sliderContainerSM: {
    height: sliderHeightSM
  },
  sliderContainerLG: {
    height: sliderHeightLG
  }
});
