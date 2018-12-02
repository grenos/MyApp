import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  FlatList,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import ParallaxScrollView from 'react-native-parallax-scroll-view';
import FastImage from 'react-native-fast-image';
import { wpH } from '../../helpers/helpers';
import SliderHor from '../sliders/SliderHor';

class AltParallaxView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        {
          key: Math.random().toString(),
          item: 'Simplicity Matters'
        },
        {
          key: Math.random().toString(),
          item: 'Hammock Driven Development'
        },
        {
          key: Math.random().toString(),
          item: 'Value of Values'
        },
        {
          key: Math.random().toString(),
          item: 'The Language of the System'
        },
        {
          key: Math.random().toString(),
          item: 'Design, Composition, and Performance'
        },
        {
          key: Math.random().toString(),
          item: 'Clojure core.async'
        },
        {
          key: Math.random().toString(),
          item: 'The Functional Database'
        },
        {
          key: Math.random().toString(),
          item: 'Deconstructing the Database'
        },
        {
          key: Math.random().toString(),
          item: 'Hammock Driven Development'
        },
        {
          key: Math.random().toString(),
          item: 'Value of Values'
        },
        {
          key: Math.random().toString(),
          item: 'The Functional Database'
        },
        {
          key: Math.random().toString(),
          item: 'Deconstructing the Database'
        },
        {
          key: Math.random().toString(),
          item: 'Hammock Driven Development'
        },
        {
          key: Math.random().toString(),
          item: 'Value of Values'
        }
      ]
    };
  }

  render() {
    const { onScroll = () => {} } = this.props;
    return (
      <FlatList
        ref={ref => {
          this.flatListRef = ref;
        }}
        style={styles.container}
        data={this.state.dataSource}
        renderItem={info => (
          <View key={info.item.key} style={styles.row}>
            <Text style={styles.rowText}>{info.item.item}</Text>
          </View>
        )}
        renderScrollComponent={props => (
          <ParallaxScrollView
            onScroll={onScroll}
            headerBackgroundColor="#333"
            stickyHeaderHeight={STICKY_HEADER_HEIGHT}
            parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
            backgroundSpeed={10}
            renderForeground={() => (
              <View key="background" style={styles.imagePL}>
                {/* <FastImage
                  style={styles.imagePL}
                  source={{
                    uri: 'http://unsplash.it/512/512?random&gravity=center',
                    priority: FastImage.priority.normal,
                    cache: FastImage.cacheControl.web
                  }}
                /> */}
                <SliderHor />
              </View>
            )}
            renderStickyHeader={() => (
              <View key="sticky-header" style={styles.stickySection}>
                <Text style={styles.stickySectionText}>Rich Hickey Talks</Text>
              </View>
            )}
            renderFixedHeader={() => (
              <View key="fixed-header" style={styles.fixedSection}>
                <Text
                  style={styles.fixedSectionText}
                  onPress={() =>
                    this.flatListRef.scrollToOffset({ animated: true, y: 0 })
                  }
                >
                  Scroll to top
                </Text>
              </View>
            )}
          />
        )}
      />
    );
  }
}

const window = Dimensions.get('window');

const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = wpH(70);
const STICKY_HEADER_HEIGHT = 70;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: window.width,
    height: PARALLAX_HEADER_HEIGHT
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: 300,
    justifyContent: 'flex-end'
  },
  stickySectionText: {
    color: 'white',
    fontSize: 20,
    margin: 10
  },
  imagePL: {
    width: window.width,
    height: PARALLAX_HEADER_HEIGHT
  },
  fixedSection: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  fixedSectionText: {
    color: '#999',
    fontSize: 20
  },
  row: {
    overflow: 'hidden',
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    justifyContent: 'center'
  },
  rowText: {
    fontSize: 20
  }
});

export default AltParallaxView;

// renderForeground={() => (
//   <View key="parallax-header" style={styles.parallaxHeader}>
//     <Image
//       style={styles.avatar}
//       source={{
//         uri:
//           'https://pbs.twimg.com/profile_images/2694242404/5b0619220a92d391534b0cd89bf5adc1_400x400.jpeg',
//         width: AVATAR_SIZE,
//         height: AVATAR_SIZE
//       }}
//     />
//     <Text style={styles.sectionSpeakerText}>
//       Talks by Rich Hickey
//     </Text>
//     <Text style={styles.sectionTitleText}>
//       CTO of Cognitec, Creator of Clojure
//     </Text>
//   </View>
// )}

// {/* <View
//                 style={{
//                   position: 'absolute',
//                   top: 0,
//                   width: window.width,
//                   backgroundColor: 'rgba(0,0,0,.4)',
//                   height: PARALLAX_HEADER_HEIGHT
//                 }}
//               /> */}

// renderBackground={() => (
//   <View key="background" style={styles.imagePL}>
//     <SliderHor />
//   </View>
// )}
