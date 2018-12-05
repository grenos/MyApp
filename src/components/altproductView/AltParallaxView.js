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
import { ScrollView } from 'react-native-gesture-handler';

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
        style={styles.container}
        data={this.state.dataSource}
        renderItem={info => (
          <View key={info.item.key} style={styles.row}>
            {/* <ScrollView nestedScrollEnabled={true}> */}
            <Text style={styles.rowText}>{info.item.item}</Text>
            {/* </ScrollView> */}
          </View>
        )}
        renderScrollComponent={() => (
          <ParallaxScrollView
            onScroll={onScroll}
            headerBackgroundColor="#fff"
            stickyHeaderHeight={STICKY_HEADER_HEIGHT}
            parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
            backgroundSpeed={10}
            renderForeground={() => (
              <View style={styles.imagePL}>
                <SliderHor />
              </View>
            )}
            renderStickyHeader={() => (
              <View key="sticky-header" style={styles.stickySection}>
                <Text style={styles.stickySectionText}>Rich Hickey Talks</Text>
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
const PARALLAX_HEADER_HEIGHT = wpH(75);
const STICKY_HEADER_HEIGHT = 70;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: window.width,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  stickySectionText: {
    color: '#000',
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

//! original foreground render
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

//! render background
// renderBackground={() => (
//   <View key="background" style={styles.imagePL}>
//     <SliderHor />
//   </View>
// )}

//! scroll to top
// ref={ref => {
//   this.flatListRef = ref;
// }}
// renderFixedHeader={() => (
//   <View key="fixed-header" style={styles.fixedSection}>
//     <Text
//       style={styles.fixedSectionText}
//       onPress={() =>
//         this.flatListRef.scrollToOffset({ animated: true, y: 0 })
//       }
//     >
//       Scroll to top
//     </Text>
//   </View>
// )}

//! render data from api or state
// data={this.state.dataSource}
// renderItem={info => (
//   <View key={info.item.key} style={styles.row}>
//     <Text style={styles.rowText}>{info.item.item}</Text>
//   </View>
// )}
