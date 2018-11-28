import React, { Component } from 'react';
import { View, Text, Button, StatusBar } from 'react-native';

class Details extends Component {
  // get the navigation object that holds the params
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.message : 'fallback message'
      // headerStyle: {
      //   backgroundColor: navigationOptions.headerTintColor
      // },
      // headerTintColor: navigationOptions.backgroundColor
    };
  };

  render() {
    // destructure object
    const { navigation } = this.props;
    // Get the param, provide a fallback value if not available
    const itemId = navigation.getParam('itemID', 'NO-ID');
    const otherParam = navigation.getParam('message', 'some default value');
    return (
      <View>
        {/* <StatusBar barStyle="light-content" backgroundColor="transparent" /> */}
        <Text>This is a detils screen</Text>
        <Text>this is passed as param {itemId}</Text>
        <Text>** also this ** {otherParam}</Text>
        <Button
          title="Update the title"
          onPress={() =>
            this.props.navigation.setParams({ message: 'Updated!' })
          }
        />
      </View>
    );
  }
}

export default Details;
