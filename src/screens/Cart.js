import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Cart extends Component {
  render() {
    return (
      <View>
        <Text>This is the shpping cart screen</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

export default Cart;
