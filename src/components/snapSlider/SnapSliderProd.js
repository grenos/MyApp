import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { ENTRIES1 } from '../../assets/data/entries';
import { wpW } from '../../helpers/helpers';

import { connect } from 'react-redux';

// const slideHeight = viewportHeight * 0.36;
// const sliderWidth = viewportWidth;
// const itemWidth = slideWidth + itemHorizontalMargin * 2;
// const itemHorizontalMargin = wp(2);
//

const Screen = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width
};

const sliderWidth = wpW(100);
const sliderHeight = Screen.height / 1.3;

const itemWidth = sliderWidth;
// const itemHeight = Screen.height / 1.3;

class SnapSliderProd extends Component {
  //
  constructor(props) {
    super(props);

    this.state = {
      activeSlide: 0
    };
  }

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

  get pagination() {
    const { activeSlide } = this.state;
    return (
      <Pagination
        dotsLength={ENTRIES1.length}
        activeDotIndex={activeSlide}
        containerStyle={{
          backgroundColor: 'transparent',
          position: 'absolute'
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.92)'
        }}
        inactiveDotStyle={{}}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  render() {
    const { toggle } = this.props;

    return (
      <View style={styles.container}>
        <Carousel
          scrollEnabled={toggle}
          data={ENTRIES1}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          sliderHeight={sliderHeight}
          itemWidth={itemWidth}
          inactiveSlideScale={1}
          onSnapToItem={index => this.setState({ activeSlide: index })}
        />
        {this.pagination}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  image: {
    width: itemWidth,
    height: Screen.height / 1.3,
    opacity: 1
  }
});

const mapStateToProps = state => {
  return {
    toggle: state.placesReducer.toggle
  };
};

export default connect(
  mapStateToProps,
  null
)(SnapSliderProd);
