import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';

const ListItem = props => (
  // view component is NOT touchable-pressable
  // on press events need to be placed on a touchable that will wrap the view we want to interact with
  // can create own styled buttons with touchables (View Text Touchable)
  <TouchableOpacity
    onPress={() => {
      props.onItemPress();
      props.navigation.navigate('PlaceModal');
    }}
  >
    <View style={styles.listItem}>
      <Image source={props.img} style={styles.image} />
      <Text>{props.place}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    padding: 10,
    backgroundColor: '#eee',
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    marginRight: 5,
    width: 30,
    height: 30
  }
});

export default withNavigation(ListItem);
