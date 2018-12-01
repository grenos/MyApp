import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  ScrollView,
  Dimensions,
  Text,
  ImageBackground
} from 'react-native';
import Interactable from 'react-native-interactable';
import { scaleFontSize } from '../../helpers/helpers';

const Screen = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width
};

export default class CollapsingHeaderWithScroll extends Component {
  constructor(props) {
    super(props);
    this._deltaY = new Animated.Value(0);
    this.state = {
      canScroll: false
    };
  }
  render() {
    return (
      <View style={styles.container}>
        {/*  */}
        <View
          style={{
            height: Screen.height / 3,
            alignItems: 'center'
          }}
        >
          <ImageBackground
            style={styles.image}
            source={{
              uri: 'http://unsplash.it/g/360/680?random&gravity=center'
            }}
          >
            <Animated.View
              style={{
                transform: [
                  {
                    translateY: this._deltaY.interpolate({
                      inputRange: [-150, -150, 0, 0],
                      outputRange: [-98, -98, 0, 0]
                    })
                  },
                  {
                    scale: this._deltaY.interpolate({
                      inputRange: [-150, -150, 0, 0],
                      outputRange: [0.6, 0.6, 1, 1]
                    })
                  }
                ]
              }}
            >
              <View style={styles.titleContainer}>
                <Text allowFontScaling={true} style={styles.title}>
                  WOMAN
                </Text>
              </View>
            </Animated.View>
          </ImageBackground>
        </View>

        <Interactable.View
          verticalOnly={true}
          snapPoints={[{ y: 0 }, { y: -150, id: 'bottom' }]}
          boundaries={{ top: -150 }}
          onSnap={this.onSnap.bind(this)}
          animatedValueY={this._deltaY}
          showsVerticalScrollIndicator={false}
        >
          <ScrollView
            bounces={false}
            scrollEnabled={this.state.canScroll}
            onScroll={this.onScroll.bind(this)}
            style={{
              left: 0,
              right: 0,
              height: Screen.height - 100,
              backgroundColor: '#fff'
            }}
          >
            <View style={styles.placeholder} />
            <View style={styles.placeholder} />
            <View style={styles.placeholder} />
            <View style={styles.placeholder} />
            <View style={styles.placeholder} />
            <View style={styles.placeholder} />
            <View style={styles.placeholder} />
          </ScrollView>
        </Interactable.View>
      </View>
    );
  }
  onSnap(event) {
    const { id } = event.nativeEvent;
    if (id === 'bottom') {
      this.setState({ canScroll: true });
    }
  }
  onScroll(event) {
    const { contentOffset } = event.nativeEvent;
    if (contentOffset.y <= 0) {
      this.setState({ canScroll: false });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  placeholder: {
    backgroundColor: '#65C888',
    flex: 1,
    height: 120,
    marginHorizontal: 20,
    marginTop: 20
  },
  image: {
    height: '100%',
    width: '100%'
  },
  title: {
    fontSize: scaleFontSize(85),
    fontWeight: 'bold',
    color: 'red'
  },
  titleContainer: {
    height: Screen.height / 3,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});
