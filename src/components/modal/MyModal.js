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
import { deletePlace, deselectPlace } from '../../store/actions/actionIndex';

const MyModal = props => {
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
            <TouchableOpacity onPress={() => props.onDeletePlace()}>
              <View style={styles.deleteButton}>
                <Icon size={30} name="ios-trash" color="red" />
              </View>
            </TouchableOpacity>
            <Button title="Close" onPress={() => props.onDeselectPlace()} />
          </View>
        </ImageBackground>
      </View>
    );
  }

  return (
    <Modal
      onRequestClose={() => props.onDeselectPlace()}
      visible={props.selectedPlace !== null}
      animationType="slide"
    >
      <View style={styles.modalContainer}>{modalContent}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'red'
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
    onDeletePlace: () => dispacth(deletePlace()),
    onDeselectPlace: () => dispacth(deselectPlace())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyModal);
