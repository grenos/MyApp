import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/actionIndex';

class PlaceInput extends Component {
  state = {
    placeName: ''
  };

  //add user input to local state
  handleInput = valueTyped => {
    this.setState({
      placeName: valueTyped
    });
  };

  // dispatch input value to store
  handlePlaceSubmit = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }
    this.props.onAddPlace(this.state.placeName);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={this.state.placeName}
          onChangeText={this.handleInput}
          placeholder="An awesome place!"
        />
        <Button
          title="Add"
          style={styles.button}
          onPress={this.handlePlaceSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'green',
    marginTop: 50
  },
  input: {
    width: '70%'
  },
  button: {
    width: '30%'
  }
});

// dispatch action
const mapDispatchToProps = dispacth => {
  return {
    onAddPlace: name => dispacth(addPlace(name))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PlaceInput);
