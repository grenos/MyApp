import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE,
  TOGGLE_FALSE,
  TOGGLE_TRUE,
  TOGGLE_STATE
} from './actiopnTypes';

export const addPlace = placeName => {
  return {
    type: ADD_PLACE,
    payload: placeName
  };
};

export const deletePlace = () => {
  return {
    type: DELETE_PLACE
  };
};

export const selectPlace = key => {
  return {
    type: SELECT_PLACE,
    payload: key
  };
};

export const deselectPlace = () => {
  return {
    type: DESELECT_PLACE
  };
};

export const toggleState = () => ({
  type: TOGGLE_STATE
});

export const toggleStateTrue = () => ({
  type: TOGGLE_TRUE
});

export const toggleStateFalse = () => ({
  type: TOGGLE_FALSE
});
