import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import PlaceInput from '../components/Input/PlaceInput';
import List from '../components/list/List';
import Logo from '../components/logo/Logo';

class Home extends Component {
  // nav options dominate over safe area view options
  static navigationOptions = ({ navigation }) => {
    // it is possible to dispatch actions to redux from the header button
    return {
      headerTitle: <Logo />,
      headerRight: (
        <Button
          onPress={() => navigation.navigate('Cart')}
          title="Cart"
          color="black"
        />
      )
    };
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <StatusBar barStyle="light-content" backgroundColor="transparent" /> */}
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Go to Sign in"
          onPress={() => this.props.navigation.navigate('App')}
        />
        <Button
          title="Go to Detials"
          onPress={() =>
            this.props.navigation.navigate('Details', {
              itemID: 86,
              message: 'this is passed as a param'
            })
          }
        />
        <Button
          title="Sliders"
          onPress={() => this.props.navigation.navigate('Sliders')}
        />
        <Button
          title="Slider"
          onPress={() => this.props.navigation.navigate('Slider')}
        />
        <Button
          title="Product Page"
          onPress={() => this.props.navigation.navigate('Product')}
        />
        <PlaceInput />
        <List />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // stretches across the screen (default direction is column so stretches from top to bottom)
    // justifyContent: 'flex-start', // when direction is column flex-start is top of screen
    alignItems: 'center'
  }
});

// const mapStateToProps = state => {
//   return {
//     places: state.placesReducer.places,
//     selectedPlace: state.placesReducer.selectedPlace
//   };
// };

// const mapDispatchToProps = dispacth => {
//   return {
//     onDeletePlace: () => dispacth(deletePlace()),
//     onSelectPlace: key => dispacth(selectPlace(key)),
//     onDeselectPlace: () => dispacth(deselectPlace())
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);

export default Home;
