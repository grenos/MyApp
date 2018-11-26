import React from 'react';
import {
  Modal,
  View,
  ImageBackground,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { deletePlace } from '../store/actions/actionIndex';

const PlaceModal = props => {
  let modalContent = null;

  if (props.selectedPlace) {
    modalContent = (
      <View>
        <ImageBackground
          source={props.selectedPlace.image}
          style={styles.image}
        >
          <Text style={styles.text}>{props.selectedPlace.name}</Text>
          <View>
            <TouchableOpacity
              onPress={() => {
                props.navigation.goBack();
                props.onDeletePlace();
              }}
            >
              <View style={styles.deleteButton}>
                <Icon size={30} name="ios-trash" color="red" />
              </View>
            </TouchableOpacity>
            <Button onPress={() => props.navigation.goBack()} title="Dismiss" />
          </View>
        </ImageBackground>
      </View>
    );
  }

  return <View style={styles.modalContainer}>{modalContent}</View>;
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 50,
    color: '#fff',
    marginTop: 350
  },
  deleteButton: {
    alignItems: 'center'
  }
});

const mapStateToProps = state => {
  return {
    selectedPlace: state.placesReducer.selectedPlace
  };
};

const mapDispatchToProps = dispacth => {
  return {
    onDeletePlace: () => dispacth(deletePlace())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceModal);
