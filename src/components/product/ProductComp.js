import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  ScrollView,
  Dimensions,
  Text
} from 'react-native';
import Interactable from 'react-native-interactable';
import SnapSliderProd from '../snapSlider/SnapSliderProd';

import { connect } from 'react-redux';
import {
  toggleStateTrue,
  toggleStateFalse
} from '../../store/actions/actionIndex';
import store from '../../store/reduxStore';

const Screen = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width
};

class ProductComp extends Component {
  constructor(props) {
    super(props);
    this._deltaY = new Animated.Value(0);

    this.state = {
      canScroll: false
    };
  }

  // dispatch actions here to use on child slider
  onSnap(event) {
    const { id } = event.nativeEvent;
    if (id === 'bottom') {
      this.setState({ canScroll: true });
      this.props.sendFalse();
    } else if (id === null) {
      this.props.sendTrue();
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
            height: Screen.height / 1.3,
            alignItems: 'center'
          }}
        >
          <SnapSliderProd>
            <Animated.View
              style={{
                transform: [
                  {
                    translateY: this._deltaY.interpolate({
                      inputRange: [-150, -150, 0, 0],
                      outputRange: [-58, -58, 0, 0]
                    })
                  }
                ]
              }}
            >
              <Text>test</Text>
            </Animated.View>
          </SnapSliderProd>
        </View>

        <Interactable.View
          verticalOnly={true}
          snapPoints={[{ y: 0 }, { y: -400, id: 'bottom' }]}
          boundaries={{ top: -450 }}
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
  }
});

const mapDispatchToProps = dispacth => {
  return {
    sendTrue: () => dispacth(toggleStateTrue()),
    sendFalse: () => dispacth(toggleStateFalse())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ProductComp);
