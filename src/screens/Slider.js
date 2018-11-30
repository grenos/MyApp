import React from 'react';
import { View, StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import SnapSlider from '../components/snapSlider/SnapSlider';

export default class Sliders extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView />
        <SnapSlider />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start'
  }
});
