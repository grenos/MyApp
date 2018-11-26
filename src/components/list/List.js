import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { selectPlace } from '../../store/actions/actionIndex';

import ListItem from '../listItem/Listitem';

const List = props => {
  // scrollView makes list scrolable but is not ideal for long lists because
  // it prints all items at once
  // Use FlatList instead  https://facebook.github.io/react-native/docs/flatlist
  return (
    //
    // FlatList needs a fata source (places array of objects from state)
    // FlatList renders automatically (renderItem)
    // FlatList gives us info prop where we can info.item.value (objectKey is key of object)
    <FlatList
      style={styles.listContainer}
      data={props.places} // array of object (state)
      renderItem={info => (
        <ListItem
          place={info.item.name}
          img={info.item.image}
          onItemPress={() => props.selectItem(info.item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    backgroundColor: 'yellow'
  }
});

const mapStateToProps = state => {
  return {
    places: state.placesReducer.places
  };
};

const mapDispatchToProps = dispacth => {
  return {
    selectItem: key => dispacth(selectPlace(key))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

// onItemPress={() => props.onOpenModal(info.item.key)}
// onPress={() => navigation.navigate('MyModal')}
