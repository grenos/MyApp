import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  StackActions,
  NavigationActions
} from 'react-navigation';

import Home from './src/screens/Home';
import Details from './src/screens/Details';
import Cart from './src/screens/Cart';
import PlaceModal from './src/screens/PlaceModal';
import Legal from './src/screens/LegaliNote';

class App extends Component {
  static navigationOptions = {
    title: 'Sign in'
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>App screen splash or sign in whatever</Text>
        <Button
          title="Go to Home-Main screen"
          onPress={() => {
            this.props.navigation.dispatch(
              StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Home' })]
              })
            );
          }}
        />
        {/* <Button
          title="Go to Home Screen"
          onPress={() => this.props.navigation.navigate('Home')}
        /> */}
      </View>
    );
  }
}

//stack navigator
// every screen declared in here has the navigation props available to it

const AppStack = createStackNavigator(
  {
    App: {
      screen: App
    },
    Home: {
      screen: Home
    },
    Details: {
      screen: Details
    },
    Cart: {
      screen: Cart
    }
  },
  {
    initialRouteName: 'App',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'black'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);

const CompleteStack = createStackNavigator(
  {
    AppStack: {
      screen: AppStack
    },
    PlaceModal: {
      screen: PlaceModal
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
    cardOverlayEnabled: true
  }
);

CompleteStack.navigationOptions = ({ navigation }) => {
  //
  let tabBarVisible = false;

  if (navigation.state.index == 0) {
    tabBarVisible = true;
  }

  return {
    tabBarVisible
  };
};

const TabNavigator = createBottomTabNavigator({
  Main: CompleteStack,
  Legal: Legal
});

// tab navigation
export default (AppContainer = createAppContainer(TabNavigator));

const styles = StyleSheet.create({
  container: {
    flex: 1, // stretches across the screen (default direction is column so stretches from top to bottom)
    justifyContent: 'flex-start' // when direction is column flex-start is top of screen
  }
});
