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
import { iOSUIKit } from 'react-native-typography';
import { wpH } from '../../helpers/helpers';
import FastImage from 'react-native-fast-image';

const Screen = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width
};

export default class CategoryComp extends Component {
  constructor(props) {
    super(props);
    this._deltaY = new Animated.Value(0);
    this.state = {
      canScroll: false
    };
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
              uri: 'http://unsplash.it/g/512/512?gravity=center'
            }}
          >
            <Animated.View
              style={{
                transform: [
                  {
                    translateY: this._deltaY.interpolate({
                      inputRange: [-150, -150, 0, 0],
                      outputRange: [-138, -138, 0, 0]
                    })
                  },
                  {
                    scale: this._deltaY.interpolate({
                      inputRange: [-150, -150, 0, 0],
                      outputRange: [0.9, 0.9, 1, 1]
                    })
                  }
                ]
              }}
            >
              <View style={styles.titleContainer}>
                <Text allowFontScaling={true} style={styles.title}>
                  Donna
                </Text>
              </View>
            </Animated.View>
          </ImageBackground>
        </View>

        <Interactable.View
          verticalOnly={true}
          snapPoints={[{ y: 0 }, { y: -wpH(20), id: 'bottom' }]}
          boundaries={{ top: -wpH(20) }}
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
            <FastImage
              style={styles.imagePL}
              source={{
                uri: 'http://unsplash.it/512/512?gravity=center',
                priority: FastImage.priority.normal,
                cache: FastImage.cacheControl.web
              }}
            />
            <FastImage
              style={styles.imagePL}
              source={{
                uri: 'http://unsplash.it/512/512?gravity=center',
                priority: FastImage.priority.normal,
                cache: FastImage.cacheControl.web
              }}
            />
            <FastImage
              style={styles.imagePL}
              source={{
                uri: 'http://lorempixel.com/g/512/512/fashion',
                priority: FastImage.priority.normal,
                cache: FastImage.cacheControl.web
              }}
            />
            <FastImage
              style={styles.imagePL}
              source={{
                uri: 'http://lorempixel.com/g/512/512/fashion',
                priority: FastImage.priority.normal,
                cache: FastImage.cacheControl.web
              }}
            />
          </ScrollView>
        </Interactable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  placeholder: {
    backgroundColor: 'white',
    flex: 1,
    height: 120,
    marginHorizontal: 20,
    marginTop: 20,
    borderColor: 'black',
    borderWidth: 1
  },
  image: {
    height: '100%',
    width: '100%'
  },
  imagePL: {
    height: wpH(20),
    width: '100%',
    marginTop: 10
  },
  title: {
    ...iOSUIKit.largeTitleEmphasized,
    fontSize: 80,
    fontWeight: 'bold',
    color: 'red',
    lineHeight: 85
  },
  titleContainer: {
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  }
});
