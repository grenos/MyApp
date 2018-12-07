import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  StackActions,
  NavigationActions,
  SafeAreaView
} from 'react-navigation';

import Home from './src/screens/Home';
import Details from './src/screens/Details';
import Cart from './src/screens/Cart';
import PlaceModal from './src/screens/PlaceModal';
import Legal from './src/screens/LegaliNote';
import Sliders from './src/screens/Sliders';
import Slider from './src/screens/Slider';
import Category from './src/screens/Category';
import Product from './src/screens/Product';
import AltParallax from './src/screens/AltParallax';

class App extends Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#4f6d7a" />
        <SafeAreaView style={{ backgroundColor: 'transparent' }} />
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
    },
    Sliders: {
      screen: Sliders
    },
    Slider: {
      screen: Slider
    },
    Category: {
      screen: Category
    },
    Product: {
      screen: Product
    },
    AltParallax: {
      screen: AltParallax
    }
  },
  {
    initialRouteName: 'App',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'white'
      },
      headerTintColor: 'black',
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

// CompleteStack.navigationOptions = ({ navigation }) => {
//   //
//   let tabBarVisible = false;

//   if (navigation.state.index == 0) {
//     tabBarVisible = true;
//   }

//   return {
//     tabBarVisible
//   };
// };

// const TabNavigator = createBottomTabNavigator({
//   Main: CompleteStack,
//   Legal: Legal
// });

// tab navigation
// export default (AppContainer = createAppContainer(TabNavigator));
export default (AppContainer = createAppContainer(CompleteStack));

const styles = StyleSheet.create({
  container: {
    flex: 1, // stretches across the screen (default direction is column so stretches from top to bottom)
    justifyContent: 'flex-start', // when direction is column flex-start is top of screen
    backgroundColor: '#4F6D7A',
    color: '#F5FCFF'
  }
});
